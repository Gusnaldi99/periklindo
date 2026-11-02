'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = [
  {
    id: 'keanggotaan',
    label: 'Keanggotaan',
    description: 'Pengajuan anggota baru pabrikan, baterai, atau SPKLU',
  },
  {
    id: 'audiensi',
    label: 'Audiensi',
    description: 'Permohonan pertemuan kelembagaan dan kebijakan',
  },
  {
    id: 'media',
    label: 'Media',
    description: 'Liputan pers, wawancara, dan media kit',
  },
  {
    id: 'sponsorship',
    label: 'Sponsorship',
    description: 'Booth, aktivasi merek, dan kemitraan PEVS',
  },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  category: CategoryId | '';
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  category: '',
  message: '',
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 3) {
    errors.name = 'Nama minimal 3 karakter.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Masukkan alamat email yang valid.';
  }
  if (values.category === 'keanggotaan' && values.company.trim().length < 2) {
    errors.company = 'Nama perusahaan wajib diisi untuk pengajuan keanggotaan.';
  }
  if (values.phone && !/^[0-9+\s()-]{8,20}$/.test(values.phone.trim())) {
    errors.phone = 'Nomor telepon tidak valid.';
  }
  if (!values.category) {
    errors.category = 'Pilih kategori kepentingan.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Uraian minimal 20 karakter agar sekretariat dapat menindaklanjuti.';
  }
  return errors;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();
  const [values, setValues] = useState<FormState>(() => {
    const match = CATEGORIES.find(
      (category) => category.id === searchParams.get('kategori')
    );
    return { ...INITIAL_STATE, category: match?.id ?? '' };
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  };

  const visibleErrors = useMemo(() => {
    const next: FormErrors = {};
    (Object.keys(errors) as (keyof FormState)[]).forEach((key) => {
      if (touched[key]) next[key] = errors[key];
    });
    return next;
  }, [errors, touched]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      category: true,
      message: true,
    });
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  const whatsappHref = useMemo(() => {
    const categoryLabel =
      CATEGORIES.find((category) => category.id === values.category)?.label ?? 'Umum';
    const text = [
      `Halo Sekretariat PERIKLINDO, saya ${values.name || '[nama]'}.`,
      `Kategori: ${categoryLabel}.`,
      values.company ? `Instansi: ${values.company}.` : '',
      values.message || 'Mohon bantuan tindak lanjut.',
    ]
      .filter(Boolean)
      .join(' ');
    return `https://wa.me/6287789703728?text=${encodeURIComponent(text)}`;
  }, [values]);

  const fieldClass = (key: keyof FormState) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-[box-shadow,border-color] duration-200',
      'focus:border-electric focus:ring-4 focus:ring-electric/15',
      visibleErrors[key] ? 'border-red-400 ring-4 ring-red-100' : 'border-slate-200'
    );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm h-full">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-electric mb-2">
        Formulir Resmi
      </p>
      <h2 className="text-2xl font-extrabold text-navy mb-2">Kirim pesan ke sekretariat</h2>
      <p className="text-sm text-slate-500 mb-8">
        Pilih kategori kepentingan agar pesan diteruskan ke bidang yang tepat.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <fieldset>
          <legend className="text-xs font-bold text-navy mb-3">Kategori kepentingan</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CATEGORIES.map((category) => {
              const selected = values.category === category.id;
              return (
                <label
                  key={category.id}
                  className={cn(
                    'cursor-pointer rounded-xl border p-3.5 transition-colors duration-150',
                    selected
                      ? 'border-electric bg-electric/5 ring-2 ring-electric/20'
                      : 'border-slate-200 hover:border-slate-300'
                  )}
                >
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={selected}
                    onChange={() => {
                      setField('category', category.id);
                      setTouched((current) => ({ ...current, category: true }));
                    }}
                    className="sr-only"
                  />
                  <span className="block text-sm font-bold text-navy">{category.label}</span>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    {category.description}
                  </span>
                </label>
              );
            })}
          </div>
          {visibleErrors.category ? (
            <p className="text-xs text-red-600 mt-2">{visibleErrors.category}</p>
          ) : null}
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-bold text-navy">Nama lengkap</span>
            <input
              type="text"
              value={values.name}
              onBlur={() => setTouched((current) => ({ ...current, name: true }))}
              onChange={(event) => setField('name', event.target.value)}
              className={cn(fieldClass('name'), 'mt-1.5')}
              autoComplete="name"
            />
            {visibleErrors.name ? (
              <p className="text-xs text-red-600 mt-1.5">{visibleErrors.name}</p>
            ) : null}
          </label>
          <label className="block">
            <span className="text-xs font-bold text-navy">Email</span>
            <input
              type="email"
              value={values.email}
              onBlur={() => setTouched((current) => ({ ...current, email: true }))}
              onChange={(event) => setField('email', event.target.value)}
              className={cn(fieldClass('email'), 'mt-1.5')}
              autoComplete="email"
            />
            {visibleErrors.email ? (
              <p className="text-xs text-red-600 mt-1.5">{visibleErrors.email}</p>
            ) : null}
          </label>
          <label className="block">
            <span className="text-xs font-bold text-navy">Perusahaan / instansi</span>
            <input
              type="text"
              value={values.company}
              onBlur={() => setTouched((current) => ({ ...current, company: true }))}
              onChange={(event) => setField('company', event.target.value)}
              className={cn(fieldClass('company'), 'mt-1.5')}
              autoComplete="organization"
            />
            {visibleErrors.company ? (
              <p className="text-xs text-red-600 mt-1.5">{visibleErrors.company}</p>
            ) : null}
          </label>
          <label className="block">
            <span className="text-xs font-bold text-navy">Nomor telepon / WhatsApp</span>
            <input
              type="tel"
              value={values.phone}
              onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
              onChange={(event) => setField('phone', event.target.value)}
              className={cn(fieldClass('phone'), 'mt-1.5')}
              autoComplete="tel"
            />
            {visibleErrors.phone ? (
              <p className="text-xs text-red-600 mt-1.5">{visibleErrors.phone}</p>
            ) : null}
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-bold text-navy">Uraian keperluan</span>
          <textarea
            value={values.message}
            onBlur={() => setTouched((current) => ({ ...current, message: true }))}
            onChange={(event) => setField('message', event.target.value)}
            rows={5}
            className={cn(fieldClass('message'), 'mt-1.5 resize-y min-h-[120px]')}
          />
          {visibleErrors.message ? (
            <p className="text-xs text-red-600 mt-1.5">{visibleErrors.message}</p>
          ) : (
            <p className="text-xs text-slate-400 mt-1.5">Minimal 20 karakter.</p>
          )}
        </label>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-electric text-white text-sm font-bold hover:bg-electric-hover disabled:opacity-70 min-h-[44px] shadow-md shadow-electric/30"
          >
            {submitting ? (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {submitting ? 'Mengirim…' : 'Kirim pesan'}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-navy text-sm font-bold hover:bg-slate-50 min-h-[44px]"
          >
            Lanjutkan via WhatsApp
          </a>
        </div>
      </form>

      <AnimatePresence>
        {submitted ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/10 px-4 py-3"
          >
            <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-navy">Pesan siap ditindaklanjuti</p>
              <p className="text-xs text-slate-600 mt-0.5">
                Terima kasih, {values.name}. Tim sekretariat akan merespons pada jam operasional.
                Anda juga dapat mengirim salinan yang sama melalui WhatsApp.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

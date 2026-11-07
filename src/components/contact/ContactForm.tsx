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

    // Real channel: open the composed WhatsApp message (no fake setTimeout success).
    setSubmitting(true);
    window.open(whatsappHref, '_blank', 'noopener,noreferrer');
    setSubmitting(false);
    setSubmitted(true);
  };

  const fieldClass = (key: keyof FormState) =>
    cn(
      'w-full border bg-slate-50 px-4 py-3 font-[family-name:var(--font-body)] text-sm text-navy outline-none',
      'transition-[border-color,box-shadow,background-color] duration-150',
      'hover:bg-white',
      'focus-visible:border-electric focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-electric/15',
      visibleErrors[key] ? 'border-red-400 ring-4 ring-red-100' : 'border-slate-500'
    );

  return (
    <div className="h-full border border-slate-200 bg-white p-6 sm:p-8">
      <p className="mb-2 font-[family-name:var(--font-body)] text-sm font-medium text-slate-500">
        Formulir Resmi
      </p>
      <h2 className="mb-2 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-navy sm:text-[1.75rem]">
        Kirim pesan ke sekretariat
      </h2>
      <p className="mb-8 font-[family-name:var(--font-body)] text-sm leading-relaxed text-slate-500">
        Pilih kategori kepentingan agar pesan diteruskan ke bidang yang tepat.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
        data-endpoint="https://wa.me/6287789703728"
        className="space-y-5"
      >
        <fieldset>
          <legend className="mb-3 font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
            Kategori kepentingan
          </legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CATEGORIES.map((category) => {
              const selected = values.category === category.id;
              return (
                <label
                  key={category.id}
                  className={cn(
                    'cursor-pointer border p-3.5 transition-[border-color,background-color,box-shadow] duration-150',
                    'focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-electric',
                    'active:bg-slate-50',
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
                  <span className="block font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
                    {category.label}
                  </span>
                  <span className="mt-0.5 block font-[family-name:var(--font-body)] text-xs text-slate-500">
                    {category.description}
                  </span>
                </label>
              );
            })}
          </div>
          {visibleErrors.category ? (
            <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-red-600">
              {visibleErrors.category}
            </p>
          ) : null}
        </fieldset>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
              Nama lengkap
            </span>
            <input
              type="text"
              value={values.name}
              onBlur={() => setTouched((current) => ({ ...current, name: true }))}
              onChange={(event) => setField('name', event.target.value)}
              className={cn(fieldClass('name'), 'mt-1.5')}
              autoComplete="name"
              aria-invalid={Boolean(visibleErrors.name)}
              aria-required="true"
            />
            {visibleErrors.name ? (
              <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-red-600">
                {visibleErrors.name}
              </p>
            ) : null}
          </label>
          <label className="block">
            <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
              Email
            </span>
            <input
              type="email"
              value={values.email}
              onBlur={() => setTouched((current) => ({ ...current, email: true }))}
              onChange={(event) => setField('email', event.target.value)}
              className={cn(fieldClass('email'), 'mt-1.5')}
              autoComplete="email"
              aria-invalid={Boolean(visibleErrors.email)}
              aria-required="true"
            />
            {visibleErrors.email ? (
              <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-red-600">
                {visibleErrors.email}
              </p>
            ) : null}
          </label>
          <label className="block">
            <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
              Perusahaan / instansi
            </span>
            <input
              type="text"
              value={values.company}
              onBlur={() => setTouched((current) => ({ ...current, company: true }))}
              onChange={(event) => setField('company', event.target.value)}
              className={cn(fieldClass('company'), 'mt-1.5')}
              autoComplete="organization"
              aria-invalid={Boolean(visibleErrors.company)}
            />
            {visibleErrors.company ? (
              <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-red-600">
                {visibleErrors.company}
              </p>
            ) : null}
          </label>
          <label className="block">
            <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
              Nomor telepon / WhatsApp
            </span>
            <input
              type="tel"
              value={values.phone}
              onBlur={() => setTouched((current) => ({ ...current, phone: true }))}
              onChange={(event) => setField('phone', event.target.value)}
              className={cn(fieldClass('phone'), 'mt-1.5')}
              autoComplete="tel"
              aria-invalid={Boolean(visibleErrors.phone)}
            />
            {visibleErrors.phone ? (
              <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-red-600">
                {visibleErrors.phone}
              </p>
            ) : null}
          </label>
        </div>

        <label className="block">
          <span className="font-[family-name:var(--font-body)] text-xs font-semibold text-navy">
            Uraian keperluan
          </span>
          <textarea
            value={values.message}
            onBlur={() => setTouched((current) => ({ ...current, message: true }))}
            onChange={(event) => setField('message', event.target.value)}
            rows={5}
            className={cn(fieldClass('message'), 'mt-1.5 min-h-[120px] resize-y')}
            aria-invalid={Boolean(visibleErrors.message)}
            aria-required="true"
          />
          {visibleErrors.message ? (
            <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-red-600">
              {visibleErrors.message}
            </p>
          ) : (
            <p className="mt-1.5 font-[family-name:var(--font-body)] text-xs text-slate-600">
              Minimal 20 karakter.
            </p>
          )}
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 bg-electric px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-[background-color,opacity] duration-150 hover:bg-electric-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90 disabled:opacity-70"
          >
            {submitting ? (
              <LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" />
            ) : (
              <Send className="h-4 w-4" aria-hidden="true" />
            )}
            {submitting ? 'Mengirim…' : 'Kirim pesan'}
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 border border-slate-200 px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-navy transition-[background-color,opacity] duration-150 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric active:opacity-90"
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
            className="mt-6 flex items-start gap-3 border border-teal/30 bg-teal/10 px-4 py-3"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
            <div>
              <p className="font-[family-name:var(--font-body)] text-sm font-semibold text-navy">
                Pesan siap ditindaklanjuti
              </p>
              <p className="mt-0.5 font-[family-name:var(--font-body)] text-xs text-slate-600">
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

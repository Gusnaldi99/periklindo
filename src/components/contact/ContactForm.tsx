'use client';

import { useMemo, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { contactInfo } from '@/data/mock-data';

type FormTab = 'umum' | 'keanggotaan';

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  businessField: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  businessField: '',
  message: '',
};

const BUSINESS_FIELDS = [
  'Pabrikan Roda 4',
  'Pabrikan Roda 2',
  'Kendaraan Niaga',
  'Sel / Pack Baterai',
  'Komponen EV',
  'SPKLU / Infrastruktur',
  'Konversi Resmi',
  'Lainnya',
];

function validate(values: FormState, tab: FormTab): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 3) {
    errors.name = 'Nama minimal 3 karakter.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Masukkan alamat email yang valid.';
  }
  if (tab === 'keanggotaan' && values.company.trim().length < 2) {
    errors.company = 'Nama perusahaan wajib diisi untuk pengajuan keanggotaan.';
  }
  if (tab === 'keanggotaan' && !values.businessField) {
    errors.businessField = 'Pilih bidang usaha EV.';
  }
  if (values.phone && !/^[0-9+\s()-]{8,20}$/.test(values.phone.trim())) {
    errors.phone = 'Nomor telepon tidak valid.';
  }
  if (tab === 'keanggotaan' && values.phone.trim().length < 8) {
    errors.phone = 'Nomor telepon / WhatsApp PIC wajib diisi.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Uraian minimal 20 karakter agar sekretariat dapat menindaklanjuti.';
  }
  return errors;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();
  const initialTab: FormTab =
    searchParams.get('tab') === 'keanggotaan' ||
    searchParams.get('kategori') === 'keanggotaan'
      ? 'keanggotaan'
      : 'umum';

  const [tab, setTab] = useState<FormTab>(initialTab);
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
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
    const nextErrors = validate(values, tab);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      businessField: true,
      message: true,
    });
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  const whatsappTarget =
    tab === 'keanggotaan'
      ? contactInfo.phone.registration
      : contactInfo.phone.secretariat;

  const whatsappHref = useMemo(() => {
    const intent =
      tab === 'keanggotaan'
        ? 'Pengajuan Keanggotaan Baru'
        : 'Pertanyaan / Audiensi Umum';
    const text = [
      `Halo ${whatsappTarget.label}, saya ${values.name || '[nama]'}.`,
      `Keperluan: ${intent}.`,
      values.company ? `Instansi/Perusahaan: ${values.company}.` : '',
      values.businessField ? `Bidang usaha: ${values.businessField}.` : '',
      values.message || 'Mohon bantuan tindak lanjut.',
    ]
      .filter(Boolean)
      .join(' ');
    return `${whatsappTarget.waUrl}?text=${encodeURIComponent(text)}`;
  }, [tab, values, whatsappTarget]);

  const fieldClass = (key: keyof FormState) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-[box-shadow,border-color] duration-200',
      'focus:border-electric focus:ring-4 focus:ring-electric/15',
      visibleErrors[key] ? 'border-red-400 ring-4 ring-red-100' : 'border-slate-200'
    );

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm h-full">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-electric mb-2">
        Formulir Ganda
      </p>
      <h2 className="text-2xl font-extrabold text-navy mb-2">Hubungi Sekretariat</h2>
      <p className="text-sm text-slate-500 mb-6">
        Pilih tab sesuai keperluan. Pesan umum menuju WhatsApp Sekretariat; pengajuan
        anggota menuju WhatsApp Pendaftaran.
      </p>

      <div
        role="tablist"
        aria-label="Jenis formulir"
        className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-slate-100 mb-7"
      >
        {(
          [
            ['umum', 'Pertanyaan / Audiensi Umum'],
            ['keanggotaan', 'Pengajuan Keanggotaan Baru'],
          ] as const
        ).map(([id, label]) => {
          const active = tab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setTab(id);
                setSubmitted(false);
                setErrors({});
              }}
              className={cn(
                'relative px-3 py-3 rounded-xl text-xs sm:text-sm font-bold min-h-[48px] transition-colors',
                active ? 'text-white' : 'text-slate-600 hover:text-navy'
              )}
            >
              {active ? (
                <motion.span
                  layoutId={shouldReduceMotion ? undefined : 'contact-form-tab'}
                  className="absolute inset-0 rounded-xl bg-navy"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs font-bold text-navy">
              {tab === 'keanggotaan' ? 'Nama PIC' : 'Nama lengkap'}
            </span>
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
            <span className="text-xs font-bold text-navy">
              {tab === 'keanggotaan' ? 'Nama perusahaan' : 'Instansi / lembaga'}
            </span>
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

        {tab === 'keanggotaan' ? (
          <label className="block">
            <span className="text-xs font-bold text-navy">Bidang usaha EV</span>
            <select
              value={values.businessField}
              onBlur={() =>
                setTouched((current) => ({ ...current, businessField: true }))
              }
              onChange={(event) => setField('businessField', event.target.value)}
              className={cn(fieldClass('businessField'), 'mt-1.5')}
            >
              <option value="">Pilih bidang usaha</option>
              {BUSINESS_FIELDS.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
            {visibleErrors.businessField ? (
              <p className="text-xs text-red-600 mt-1.5">{visibleErrors.businessField}</p>
            ) : null}
          </label>
        ) : null}

        <label className="block">
          <span className="text-xs font-bold text-navy">
            {tab === 'keanggotaan' ? 'Catatan pengajuan' : 'Uraian pertanyaan / audiensi'}
          </span>
          <textarea
            value={values.message}
            onBlur={() => setTouched((current) => ({ ...current, message: true }))}
            onChange={(event) => setField('message', event.target.value)}
            rows={5}
            className={cn(fieldClass('message'), 'mt-1.5 resize-y min-h-[120px]')}
            placeholder={
              tab === 'keanggotaan'
                ? 'Jelaskan profil perusahaan, produk EV, dan kebutuhan keanggotaan…'
                : 'Jelaskan keperluan audiensi, pertanyaan regulasi, atau kerja sama…'
            }
          />
          {visibleErrors.message ? (
            <p className="text-xs text-red-600 mt-1.5">{visibleErrors.message}</p>
          ) : (
            <p className="text-xs text-slate-400 mt-1.5">Minimal 20 karakter.</p>
          )}
        </label>

        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
          Tindak lanjut WhatsApp:{' '}
          <strong className="text-navy">{whatsappTarget.label}</strong> —{' '}
          <a
            href={whatsappTarget.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-electric hover:underline"
          >
            {whatsappTarget.number}
          </a>
        </div>

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
            {submitting
              ? 'Mengirim…'
              : tab === 'keanggotaan'
                ? 'Kirim pengajuan'
                : 'Kirim pertanyaan'}
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

        <p className="text-xs leading-relaxed text-slate-500 pt-1">
          Data yang Anda kirimkan diteruskan ke Sekretariat PERIKLINDO untuk tindak lanjut
          {tab === 'keanggotaan' ? ' keanggotaan' : ' pertanyaan atau audiensi'} dan tidak
          dijual kepada pihak ketiga. Setelah verifikasi, balasan akan dikirim melalui email
          atau WhatsApp pada jam layanan ({contactInfo.officeHours.days},{' '}
          {contactInfo.officeHours.hours}).
        </p>
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
                Terima kasih, {values.name}. Tim akan merespons pada jam operasional melalui
                kanal {whatsappTarget.label} ({whatsappTarget.number}).
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

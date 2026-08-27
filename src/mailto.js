// Builders for the contact links.
//
// The contact CTAs are deliberately plain mailto: links rather than a form —
// the message is composed and sent by the visitor's own mail client, so the
// site itself collects nothing and needs no privacy notice of its own. The
// prefilled subject and body just remove the "compose from scratch" friction.

export function mailtoHref(email, { subject, body } = {}) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)

  // URLSearchParams serialises spaces as '+', which mail clients drop into the
  // subject and body as literal plus signs. Only %20 is understood there.
  const query = params.toString().replace(/\+/g, '%20')

  return query ? `mailto:${email}?${query}` : `mailto:${email}`
}

// A tel: URI must not contain spaces (RFC 3966), so the display form
// ('+30 697 ...') can't be dropped straight into the href.
export function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

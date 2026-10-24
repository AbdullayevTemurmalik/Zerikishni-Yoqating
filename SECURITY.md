# Security Policy & Quality Assurance (QA)

## Quality Assurance & Performance Standards
- **Frame Budget:** 60 FPS guaranteed on desktop and modern mobile devices.
- **Zero Memory Leaks:** Geometries and materials are systematically tracked and reused; particle pools are bounded to fixed max limits.
- **Client-Side Isolation:** Runs 100% in client browser memory with zero network dependencies at runtime.
- **Sound Isolation:** Web Audio API contexts are automatically muted and suspended upon window blur or tab invisibility to preserve battery and respect user privacy.

## Security Controls
- **Content Security:** Safe local storage serialization with strict validation wrappers.
- **XSS Prevention:** Zero DOM evaluation (`no eval`, `no innerHTML` from unvalidated inputs).
- **Vercel Security Headers:** Includes `X-Content-Type-Options: nosniff` and CORS policies configured in `vercel.json`.

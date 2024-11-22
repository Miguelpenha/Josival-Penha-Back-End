function formatPhone(phone: string): string {
	const phoneFormatted = phone.replace(/\D/g, '')

	if (phoneFormatted.length === 12) {
		return `${phoneFormatted.slice(0, 4)}9${phoneFormatted.slice(4)}`
	} else {
		return phoneFormatted
	}
}

export default formatPhone
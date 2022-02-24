export const cap = (word) => {
	if (typeof word === "string") {
		return word
			.split(" ")
			.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
			.join(" ")
			.split("-")
			.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
			.join("-");
	} else {
		return word;
	}
};

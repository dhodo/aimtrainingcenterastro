const image2 = new Proxy({"src":"/_astro/image2.RXFCifQh.jpg","width":600,"height":450,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/dhodo/projects/aimtrainingcenterastro/src/assets/images/landing/image2.jpg";
							}
							
							return target[name];
						}
					});

export { image2 as i };

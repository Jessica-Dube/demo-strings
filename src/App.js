/**
 * @module App
 */
import Solution from "./Solution.js";
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ELEVE▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")
		// Tous les affichages se font avec console.log
		// Créer la variable str1 avec la valeur "Rita Raté"
		var str1 = "Rita Raté";

		// Faire afficher "Rita Raté"
		console.log(str1);

		// Créer la variable str2 avec la valeur "le petit chaperon rouge"
		var str2 = "le petit chaperon rouge"

		// Faire afficher "Rita Raté et le petit chaperon rouge"

		console.log(str1 + " et " + str2);

		// En utilisant str1, créer la variable num1 qui vaut 9 puis la faire afficher
		var num = str1.length;
		console.log(num);

		// Faire afficher str2
		console.log(str2);

		// Faire afficher les 9 premiers caractères de str2
		console.log(str2.slice(0, num));

		// Faire afficher les 9 derniers caractères de str2
		console.log(str2.slice (-num));

		// Créer la variable num2 qui a comme valeur la position du mot "rouge" (faire afficher)
		var num2 = str2.indexOf("rouge");
		console.log(num2);

		// Faire afficher "Le petit chaperon bleu"

		// Faire afficher "18/9=2"

		// Créer la variable num3 avec comme valeur la position de l'espace dans str1 (faire afficher)

		// Faire afficher "Raté"

		// Faire afficher "Rita"

		// Faire afficher "Raté, Rita"

		// Faire afficher "LE PETIT CHAPERON ROUGE"

		// Faire afficher "L"

		// Faire afficher "e petit chaperon rouge"

		// Faire afficher "Le petit chaperon rouge"

	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
			Solution.main();
		});
	}
}
App.init();

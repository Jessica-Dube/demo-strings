/**
 * @module Solution
 */
export default class Solution {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓SOLUTION▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")
		// Tous les affichages se font avec console.log
		// Créer la variable str1 avec la valeur "Rita Raté"
		var str1 = "Rita Raté";
		// Faire afficher "Rita Raté"
		console.log(str1);
		// Créer la variable str2 avec la valeur "le petit chaperon rouge"
		var str2 = "le petit chaperon rouge";
		// Faire afficher "Rita Raté et le petit chaperon rouge"
		console.log(str1 + " et " + str2);
		// En utilisant str1, créer la variable num1 qui vaut 9 puis la faire afficher
		var num1 = str1.length;
		console.log(num1);
		// Faire afficher str2
		console.log(str2);
		// Faire afficher les 9 premiers caractères de str2
		console.log(str2.slice(0, num1));
		// Faire afficher les 9 derniers caractères de str2
		console.log(str2.slice(-num1));
		// Créer la variable num2 qui a comme valeur la position du mot "rouge" (faire afficher)
		var num2 = str2.indexOf("rouge");
		console.log(num2);
		// Faire afficher "Le petit chaperon bleu"
		console.log(str2.slice(0, num2) + "bleu");
		// Faire afficher "18/9=2"
		console.log(num2 + "/" + num1 + "=" + (num2/num1));
		// Créer la variable num3 avec comme valeur la position de l'espace dans str1 (faire afficher)
		var num3 = str1.indexOf(" ");
		console.log(num3);
		// Faire afficher "Raté"
		console.log(str1.slice(num3 + 1));
		// Faire afficher "Raté, Rita"
		console.log(str1.slice(0, num3));
		// Faire afficher "Raté, Rita"
		console.log(str1.slice(num3 + 1) + ", " + str1.slice(0, num3));
		// Faire afficher "LE PETIT CHAPERON ROUGE"
		console.log(str2.toUpperCase());
		// Faire afficher "L"
		console.log(str2.toUpperCase().slice(0, 1));
		// Faire afficher "e petit chaperon rouge"
		console.log(str2.slice(1));
		// Faire afficher "Le petit chaperon rouge"
		console.log(str2.toUpperCase().slice(0, 1) + str2.slice(1));
	}
}

/** @format */

// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";
export const IH_theme: CustomThemeConfig = {
	name: "IH_theme",
	properties: {
		/* =~= Theme Properties =~= */
	"--theme-font-family-base": 'system-ui',
	"--theme-font-family-heading": 'system-ui',
	"--theme-font-color-base": '0 0 0',
	"--theme-font-color-dark": '255 255 255',
	"--theme-rounded-base": '6px',
	"--theme-rounded-container": '6px',
	"--theme-border-base": '1px',
	/* =~= Theme On-X Colors =~= */
	"--on-primary": '255 255 255',
	"--on-secondary": '0 0 0',
	"--on-tertiary": '0 0 0',
	"--on-success": '0 0 0',
	"--on-warning": '0 0 0',
	"--on-error": '0 0 0',
	"--on-surface": '255 255 255',
	/* =~= Theme Colors  =~= */
	/* primary | #487ce5 */
	"--color-primary-50": '228 235 251', /* ⬅ #e4ebfb */
	"--color-primary-100": '218 229 250', /* ⬅ #dae5fa */
	"--color-primary-200": '209 222 249', /* ⬅ #d1def9 */
	"--color-primary-300": '182 203 245', /* ⬅ #b6cbf5 */
	"--color-primary-400": '127 163 237', /* ⬅ #7fa3ed */
	"--color-primary-500": '72 124 229', /* ⬅ #487ce5 */
	"--color-primary-600": '65 112 206', /* ⬅ #4170ce */
	"--color-primary-700": '54 93 172', /* ⬅ #365dac */
	"--color-primary-800": '43 74 137', /* ⬅ #2b4a89 */
	"--color-primary-900": '35 61 112', /* ⬅ #233d70 */
	/* secondary | #FB923C */
	"--color-secondary-50": '254 239 226', /* ⬅ #feefe2 */
	"--color-secondary-100": '254 233 216', /* ⬅ #fee9d8 */
	"--color-secondary-200": '254 228 206', /* ⬅ #fee4ce */
	"--color-secondary-300": '253 211 177', /* ⬅ #fdd3b1 */
	"--color-secondary-400": '252 179 119', /* ⬅ #fcb377 */
	"--color-secondary-500": '251 146 60', /* ⬅ #FB923C */
	"--color-secondary-600": '226 131 54', /* ⬅ #e28336 */
	"--color-secondary-700": '188 110 45', /* ⬅ #bc6e2d */
	"--color-secondary-800": '151 88 36', /* ⬅ #975824 */
	"--color-secondary-900": '123 72 29', /* ⬅ #7b481d */
	/* tertiary | #bae5fd */
	"--color-tertiary-50": '245 251 255', /* ⬅ #f5fbff */
	"--color-tertiary-100": '241 250 255', /* ⬅ #f1faff */
	"--color-tertiary-200": '238 249 255', /* ⬅ #eef9ff */
	"--color-tertiary-300": '227 245 254', /* ⬅ #e3f5fe */
	"--color-tertiary-400": '207 237 254', /* ⬅ #cfedfe */
	"--color-tertiary-500": '186 229 253', /* ⬅ #bae5fd */
	"--color-tertiary-600": '167 206 228', /* ⬅ #a7cee4 */
	"--color-tertiary-700": '140 172 190', /* ⬅ #8cacbe */
	"--color-tertiary-800": '112 137 152', /* ⬅ #708998 */
	"--color-tertiary-900": '91 112 124', /* ⬅ #5b707c */
	/* success | #8aca2b */
	"--color-success-50": '237 247 223', /* ⬅ #edf7df */
	"--color-success-100": '232 244 213', /* ⬅ #e8f4d5 */
	"--color-success-200": '226 242 202', /* ⬅ #e2f2ca */
	"--color-success-300": '208 234 170', /* ⬅ #d0eaaa */
	"--color-success-400": '173 218 107', /* ⬅ #adda6b */
	"--color-success-500": '138 202 43', /* ⬅ #8aca2b */
	"--color-success-600": '124 182 39', /* ⬅ #7cb627 */
	"--color-success-700": '104 152 32', /* ⬅ #689820 */
	"--color-success-800": '83 121 26', /* ⬅ #53791a */
	"--color-success-900": '68 99 21', /* ⬅ #446315 */
	/* warning | #EAB308 */
	"--color-warning-50": '252 244 218', /* ⬅ #fcf4da */
	"--color-warning-100": '251 240 206', /* ⬅ #fbf0ce */
	"--color-warning-200": '250 236 193', /* ⬅ #faecc1 */
	"--color-warning-300": '247 225 156', /* ⬅ #f7e19c */
	"--color-warning-400": '240 202 82', /* ⬅ #f0ca52 */
	"--color-warning-500": '234 179 8', /* ⬅ #EAB308 */
	"--color-warning-600": '211 161 7', /* ⬅ #d3a107 */
	"--color-warning-700": '176 134 6', /* ⬅ #b08606 */
	"--color-warning-800": '140 107 5', /* ⬅ #8c6b05 */
	"--color-warning-900": '115 88 4', /* ⬅ #735804 */
	/* error | #ff6647 */
	"--color-error-50": '255 232 227', /* ⬅ #ffe8e3 */
	"--color-error-100": '255 224 218', /* ⬅ #ffe0da */
	"--color-error-200": '255 217 209', /* ⬅ #ffd9d1 */
	"--color-error-300": '255 194 181', /* ⬅ #ffc2b5 */
	"--color-error-400": '255 148 126', /* ⬅ #ff947e */
	"--color-error-500": '255 102 71', /* ⬅ #ff6647 */
	"--color-error-600": '230 92 64', /* ⬅ #e65c40 */
	"--color-error-700": '191 77 53', /* ⬅ #bf4d35 */
	"--color-error-800": '153 61 43', /* ⬅ #993d2b */
	"--color-error-900": '125 50 35', /* ⬅ #7d3223 */
	/* surface | #d1d1d1 */
	"--color-surface-50": "248 248 248", /* ⬅ #f8f8f8 */
	"--color-surface-100": "246 246 246", /* ⬅ #f6f6f6 */
	"--color-surface-200": "244 244 244", /* ⬅ #f4f4f4 */
	"--color-surface-300": "237 237 237", /* ⬅ #ededed */
	"--color-surface-400": "223 223 223", /* ⬅ #dfdfdf */
	"--color-surface-500": "209 209 209", /* ⬅ #d1d1d1 */
	"--color-surface-600": "188 188 188", /* ⬅ #bcbcbc */
	"--color-surface-700": "157 157 157", /* ⬅ #9d9d9d */
	"--color-surface-800": "125 125 125", /* ⬅ #7d7d7d */
	"--color-surface-900": "102 102 102", /* ⬅ #666666 */
	},
};

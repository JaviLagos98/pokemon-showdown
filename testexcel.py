import pandas as pd

def excel_to_pokemon_dict(excel_file):
    # Leer el archivo Excel
    xls = pd.ExcelFile(excel_file)

    # Inicializar el diccionario de salida
    pokemon_dict = {}

    # Iterar sobre todas las hojas del archivo Excel
    for sheet_name in xls.sheet_names:
        # Leer los datos de la hoja actual
        df = pd.read_excel(excel_file, sheet_name, header=None)

        # Filtrar las filas que contienen datos de Pokémon
        pokemon_rows = df[df[0].notnull()]

        # Iterar sobre las filas de Pokémon
        for index, row in pokemon_rows.iterrows():
            pokemon_data = {
                "num": int(row[0]),
                "name": row[1],
                "types": [t.strip() for t in row[4].split(",")],
                "baseStats": {
                    "hp": int(row[3]),
                    "atk": int(row[7]),
                    "def": int(row[11]),
                    "spa": int(row[15]),
                    "spd": int(row[19]),
                    "spe": int(row[23]),
                },
                "abilities": {0: row[27]},
                "gen": None  # Agrega la generación correspondiente si está disponible
            }

            # Agregar el Pokémon al diccionario
            pokemon_dict[row[1].lower().replace(" ", "")] = pokemon_data

    return pokemon_dict

# Nombre de tu archivo Excel
excel_file_path = "TWICHCUPTEAMS.xlsx"

# Obtener el diccionario de Pokémon
pokemon_dict = excel_to_pokemon_dict(excel_file_path)

# Ruta al archivo de salida
output_file_path = "pokemon_tc3.txt"

# Guardar el diccionario en un archivo JSON
with open(output_file_path, 'w') as output_file:
    json.dump(pokemon_dict, output_file, indent=2)

# Imprimir un mensaje de confirmación
print(f"El diccionario de Pokémon se ha guardado en '{output_file_path}'.")
import requests
import csv
import multiprocessing

# Ouvrez le fichier CSV
with open("./data2/queryResults_2.csv", "r") as f:
    reader = csv.reader(f, delimiter=';', quotechar='"')
    # Read the first row
    first_row = next(reader)
    
    # Calculate the number of columns
    num_columns = len(first_row)
    
    # Print the number of columns
    print(f"Number of columns in the CSV: {num_columns}")
    # Obtenez les URL des PDF
    pdf_urls = [row[4] for row in reader]

    # Créez un pool de processus
    pool = multiprocessing.Pool()

    # Téléchargez les PDF en parallèle
    results = pool.map(lambda pdf_url: requests.get(pdf_url), pdf_urls)

    # Enregistrez les PDF
    for result in results:
        with open(result.headers["Content-Disposition"].split(",")[1].split("=")[1] + ".pdf", "wb") as f:
            f.write(result.content)
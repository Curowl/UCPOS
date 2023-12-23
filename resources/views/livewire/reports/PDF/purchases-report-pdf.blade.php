<!-- resources/views/livewire/reports/purchases-report-pdf.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Informe de Compras</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #666;
        }

        th, td {
            padding: 10px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }

        td {
            background-color: #fff;
        }

        .badge {
            display: inline-block;
            font-size: 0.75em;
            padding: 0.375em 0.5625em;
            font-weight: 700;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 0.25rem;
        }

        .badge-info {
            color: #fff;
            background-color: #17a2b8;
        }

        .badge-primary {
            color: #fff;
            background-color: #007bff;
        }

        .badge-success {
            color: #fff;
            background-color: #28a745;
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <h1>Informe de Compras</h1>

    <table>
        <thead>
        <tr>
            <th>Fecha</th>
            <th>Referencia</th>
            <th>Proveedor</th>
            <th>Estado</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        @forelse($purchases as $purchase)
            <tr>
                <td>{{ \Carbon\Carbon::parse($purchase->date)->format('d M, Y') }}</td>
                <td>{{ $purchase->reference }}</td>
                <td>{{ $purchase->supplier_name }}</td>
                <td>
                    @if ($purchase->status == 'Pendiente')
                        <span class="badge badge-info">
                            {{ $purchase->status }}
                        </span>
                    @elseif ($purchase->status == 'Enviado')
                        <span class="badge badge-primary">
                            {{ $purchase->status }}
                        </span>
                    @else
                        <span class="badge badge-success">
                            {{ $purchase->status }}
                        </span>
                    @endif
                </td>
                <td>{{ format_currency($purchase->total_amount) }}</td>
            </tr>
        @empty
            <tr>
                <td colspan="5">
                    ¡No hay datos de compras disponibles!
                </td>
            </tr>
        @endforelse
        </tbody>
    </table>
</div>
</body>
</html>

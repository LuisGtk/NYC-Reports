export default function brooklyn() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Agent Name</th>
                    <th>Borough</th>
                    <th>Complaint Type</th>
                    <th>Descriptor</th>

                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((row, index) => (
                        <tr key={index}>
                            <td>{row['agency_name']}</td>
                            <td>{row['borough']}</td>
                            <td>{row['complaint_type']}</td>
                            <td>{row['descriptor']}</td>
                            <td>{row['city']}</td>
                        </tr>
                    ))
                }
            </tbody>
            <tbody>

            </tbody>
        </table>
    )
}
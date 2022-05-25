export async function get({ params }: any) {
    // `params.id` comes from [id].js
    return {
        body: { id: parseInt(params.id) }
    }
}

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Check if we're in Docker (proto at ./proto) or local dev (proto at ../proto)
    let proto_path = if std::path::Path::new("./proto/test/test.proto").exists() {
        "./proto/test/test.proto"
    } else {
        "../proto/test/test.proto"
    };
    
    let proto_include = if std::path::Path::new("./proto").exists() {
        "./proto"
    } else {
        "../proto"
    };

    tonic_build::configure()
        .build_server(true)
        .build_client(false)
        .compile_protos(
            &[proto_path],
            &[proto_include],
        )?;
    Ok(())
}






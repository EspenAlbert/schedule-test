# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL(x 2)
Success rate: 95.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 01:24](#error-2025-10-13t0124120000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar | dev | 0.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar | qa | 0.05s

## Timeline
- 2025-09-30 PASS 5 seconds
- 2025-10-01
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-10-02 PASS 4 seconds
- 2025-10-03 PASS 4 seconds
- 2025-10-04 PASS 5 seconds
- 2025-10-05 PASS 5 seconds
- 2025-10-06 PASS 5 seconds
- 2025-10-07 PASS 3 seconds
- 2025-10-08 PASS 4 seconds
- 2025-10-09 PASS 3 seconds
- 2025-10-10 PASS 4 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12 PASS 4 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2969827Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-10-13T01:24:12.3211326Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-10-13T01:24:12.3214936Z   diagnostic_detail=
2025-10-13T01:24:12.3217097Z   
2025-10-13T01:24:12.3243103Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-10-13T01:24:12.3243634Z         
2025-10-13T01:24:12.3243979Z         Error: error fetching resource
2025-10-13T01:24:12.3244326Z         
2025-10-13T01:24:12.3244864Z           with data.mongodbatlas_stream_connection.sample,
2025-10-13T01:24:12.3245673Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-13T01:24:12.3246520Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-13T01:24:12.3246873Z         
2025-10-13T01:24:12.3247957Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ec47f2b8d3122c296501b7/streams/test-acc-tf-s-6101778557580258383/connections/sample_stream_solar
2025-10-13T01:24:12.3249199Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-13T01:24:12.3249922Z         Detail: Stream connection with name sample_stream_solar for project
2025-10-13T01:24:12.3250641Z         68ec47f2b8d3122c296501b7 and name test-acc-tf-s-6101778557580258383 not
2025-10-13T01:24:12.3251428Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-10-13T01:24:12.3252182Z         68ec47f2b8d3122c296501b7 test-acc-tf-s-6101778557580258383],
2025-10-13T01:24:12.3252649Z         BadRequestDetail: 
2025-10-13T01:24:12.3270490Z   
2025-10-13T01:24:12.3280779Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.44s)
```

- 2025-10-14 PASS 5 seconds
- 2025-10-15 PASS 3 seconds
- 2025-10-16 PASS 3 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18 PASS 3 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1813345Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-10-19T00:50:12.2127736Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-10-19T00:50:12.2128549Z   diagnostic_detail=
2025-10-19T00:50:12.2130438Z    tf_req_id=d308889d-38ce-07be-5f03-43e909889524 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig tf_proto_version=6.10 tf_resource_type=mongodbatlas_stream_processor diagnostic_severity=ERROR
2025-10-19T00:50:12.2141792Z   
2025-10-19T00:50:12.2151875Z === NAME  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-10-19T00:50:12.2152273Z     resource_test.go:86: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-10-19T00:50:12.2152401Z         
2025-10-19T00:50:12.2152574Z         Error: error fetching resource
2025-10-19T00:50:12.2152668Z         
2025-10-19T00:50:12.2152950Z           with data.mongodbatlas_stream_connection.sample,
2025-10-19T00:50:12.2153515Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-10-19T00:50:12.2153869Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-10-19T00:50:12.2154012Z         
2025-10-19T00:50:12.2154899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar
2025-10-19T00:50:12.2155236Z         GET: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2155664Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2156005Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2156320Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2156547Z         BadRequestDetail: 
2025-10-19T00:50:12.2157061Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.50s)
```

- 2025-10-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-10-21 PASS 3 seconds
- 2025-10-22
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-10-23 PASS 3 seconds
- 2025-10-24 PASS 4 seconds
- 2025-10-25 PASS 4 seconds
- 2025-10-26 PASS 3 seconds
- 2025-10-27 PASS 3 seconds
- 2025-10-28 PASS 3 seconds
- 2025-10-29 PASS 4 seconds
- 2025-10-30 PASS 4 seconds
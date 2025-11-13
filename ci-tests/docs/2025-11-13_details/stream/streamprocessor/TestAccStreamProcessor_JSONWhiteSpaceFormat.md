# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/connections/sample_stream_solar | qa | 0.05s
[2025-11-06 00:51](#error-2025-11-06t0051580000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar | dev | 0.04s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-31 PASS 4 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 seconds
- 2025-11-03 PASS 3 seconds
- 2025-11-04 PASS 3 seconds
- 2025-11-05
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-11-06

### Error 2025-11-06T00:51:58+00:00
```
2025-11-06T00:51:58.1234995Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1558415Z === CONT  TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1560163Z   diagnostic_detail=
2025-11-06T00:51:58.1562805Z    tf_proto_version=6.10 tf_resource_type=mongodbatlas_stream_processor diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" diagnostic_attribute="AttributeName(\"pipeline\")"
2025-11-06T00:51:58.1577824Z    test_working_directory=/tmp/plugintest1949435983 test_name=TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-11-06T00:51:58.1578671Z     resource_test.go:124: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-11-06T00:51:58.1579084Z         
2025-11-06T00:51:58.1579375Z         Error: error fetching resource
2025-11-06T00:51:58.1579656Z         
2025-11-06T00:51:58.1580028Z           with data.mongodbatlas_stream_connection.sample,
2025-11-06T00:51:58.1580891Z           on terraform_plugin_test.tf line 25, in data "mongodbatlas_stream_connection" "sample":
2025-11-06T00:51:58.1581508Z           25:             data "mongodbatlas_stream_connection" "sample" {
2025-11-06T00:51:58.1581837Z         
2025-11-06T00:51:58.1582725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690beb6db3b40e65d4dd6ef5/streams/test-acc-tf-s-5095699402994875159/connections/sample_stream_solar
2025-11-06T00:51:58.1583651Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-11-06T00:51:58.1584266Z         Detail: Stream connection with name sample_stream_solar for project
2025-11-06T00:51:58.1584902Z         690beb6db3b40e65d4dd6ef5 and name test-acc-tf-s-5095699402994875159 not
2025-11-06T00:51:58.1585461Z         found. Reason: Not Found. Params: [sample_stream_solar
2025-11-06T00:51:58.1585982Z         690beb6db3b40e65d4dd6ef5 test-acc-tf-s-5095699402994875159],
2025-11-06T00:51:58.1586392Z         BadRequestDetail: 
2025-11-06T00:51:58.1601028Z    test_terraform_path=/home/runner/work/_temp/c67eacf2-2435-42b6-ba18-88c701e78006/terraform
2025-11-06T00:51:58.1609966Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.43s)
```

- 2025-11-07 PASS 3 seconds
- 2025-11-08 PASS 3 seconds
- 2025-11-09 PASS 3 seconds
- 2025-11-10 PASS 4 seconds
- 2025-11-11 PASS 3 seconds
- 2025-11-12 PASS 5 seconds
- 2025-11-13
  - PASS 3 seconds
  - PASS 3 seconds
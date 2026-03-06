# stream/streamprocessor/TestAccStreamProcessor_withTier Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar | dev |  | 0.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar | dev |  | 0.06s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0679627Z === RUN   TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1101777Z === CONT  TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1102625Z   diagnostic_detail=
2026-02-05T01:04:40.1105803Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ValidateResourceConfig diagnostic_attribute="AttributeName(\"pipeline\")" diagnostic_severity=ERROR tf_req_id=e4dbb44b-3fc4-33cc-ce2d-9b55d46e805f tf_proto_version=6.10 tf_resource_type=mongodbatlas_stream_processor diagnostic_summary="Invalid JSON String Value"
2026-02-05T01:04:40.1122554Z   
2026-02-05T01:04:40.1177814Z === NAME  TestAccStreamProcessor_withTier
2026-02-05T01:04:40.1178324Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-05T01:04:40.1178738Z         
2026-02-05T01:04:40.1179013Z         Error: error fetching resource
2026-02-05T01:04:40.1179293Z         
2026-02-05T01:04:40.1179723Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-05T01:04:40.1180513Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-05T01:04:40.1181236Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-05T01:04:40.1181748Z         
2026-02-05T01:04:40.1182610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/connections/sample_stream_solar
2026-02-05T01:04:40.1183650Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-05T01:04:40.1184296Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-05T01:04:40.1184921Z         6983e6a2304923ebd1858df5 and name test-acc-tf-s-6349336018238537323 not
2026-02-05T01:04:40.1185501Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-05T01:04:40.1186027Z         6983e6a2304923ebd1858df5 test-acc-tf-s-6349336018238537323],
2026-02-05T01:04:40.1186432Z         BadRequestDetail: 
2026-02-05T01:04:40.1186741Z --- FAIL: TestAccStreamProcessor_withTier (0.54s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
```
2026-02-06T00:56:32.5645120Z === RUN   TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6090721Z === CONT  TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6160947Z === NAME  TestAccStreamProcessor_withTier
2026-02-06T00:56:32.6161475Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-06T00:56:32.6161890Z         
2026-02-06T00:56:32.6162168Z         Error: error fetching resource
2026-02-06T00:56:32.6162443Z         
2026-02-06T00:56:32.6162891Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-06T00:56:32.6163687Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-06T00:56:32.6164409Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-06T00:56:32.6164774Z         
2026-02-06T00:56:32.6165620Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/connections/sample_stream_solar
2026-02-06T00:56:32.6166539Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-06T00:56:32.6167205Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-06T00:56:32.6167841Z         6985378713125e9acd98a203 and name test-acc-tf-s-69697366263959401 not found.
2026-02-06T00:56:32.6168479Z         Reason: Not Found. Params: [sample_stream_solar 6985378713125e9acd98a203
2026-02-06T00:56:32.6169023Z         test-acc-tf-s-69697366263959401], BadRequestDetail: 
2026-02-06T00:56:32.6169762Z --- FAIL: TestAccStreamProcessor_withTier (0.62s)
```

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6155459Z === RUN   TestAccStreamProcessor_withTier
2026-02-07T00:56:32.6559672Z === CONT  TestAccStreamProcessor_withTier
2026-02-07T00:56:32.6561004Z   diagnostic_detail=
2026-02-07T00:56:32.6564001Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" tf_proto_version=6.10 tf_rpc=ValidateResourceConfig tf_req_id=e308b94d-f49d-33b1-608d-d74c61dbdb88 tf_resource_type=mongodbatlas_stream_processor
2026-02-07T00:56:32.6580402Z   
2026-02-07T00:56:32.6629716Z === NAME  TestAccStreamProcessor_withTier
2026-02-07T00:56:32.6630233Z     resource_test.go:63: Step 1/3 error: Error running pre-apply plan: exit status 1
2026-02-07T00:56:32.6630635Z         
2026-02-07T00:56:32.6630917Z         Error: error fetching resource
2026-02-07T00:56:32.6631192Z         
2026-02-07T00:56:32.6631629Z           with data.mongodbatlas_stream_connection.sample_stream_solar,
2026-02-07T00:56:32.6632417Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "sample_stream_solar":
2026-02-07T00:56:32.6633302Z           12: 	data "mongodbatlas_stream_connection" "sample_stream_solar" {
2026-02-07T00:56:32.6633662Z         
2026-02-07T00:56:32.6634528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/connections/sample_stream_solar
2026-02-07T00:56:32.6635597Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-07T00:56:32.6636218Z         Detail: Stream connection with name sample_stream_solar for project
2026-02-07T00:56:32.6636835Z         6986890ede0bdc0de28a3d42 and name test-acc-tf-s-1370710812024176273 not
2026-02-07T00:56:32.6637390Z         found. Reason: Not Found. Params: [sample_stream_solar
2026-02-07T00:56:32.6637913Z         6986890ede0bdc0de28a3d42 test-acc-tf-s-1370710812024176273],
2026-02-07T00:56:32.6638308Z         BadRequestDetail: 
2026-02-07T00:56:32.6645429Z --- FAIL: TestAccStreamProcessor_withTier (0.63s)
```

  - PASS 11 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 10 seconds
- 2026-02-10 PASS 10 seconds
- 2026-02-11 PASS 13 seconds
- 2026-02-12
  - PASS 11 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7782496Z === RUN   TestAccStreamProcessor_withTier
2026-02-12T18:47:26.7783469Z     resource_test.go:58: Creating execution project (1): test-acc-tf-p-5212458583271977967
2026-02-12T18:47:26.7784302Z     resource_test.go:58: 
2026-02-12T18:47:26.7785899Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7789248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7792488Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7795706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7799277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:58
2026-02-12T18:47:26.7801401Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:26.7802284Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7807251Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7809848Z         	Test:       	TestAccStreamProcessor_withTier
2026-02-12T18:47:26.7813965Z         	Messages:   	Project creation failed: test-acc-tf-p-5212458583271977967, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7816939Z --- FAIL: TestAccStreamProcessor_withTier (0.23s)
```

- 2026-02-13 PASS 13 seconds
- 2026-02-14 PASS 11 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 10 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 11 seconds
- 2026-02-20 PASS 13 seconds
- 2026-02-21 PASS 10 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2229364Z === RUN   TestAccStreamProcessor_withTier
2026-02-24T01:09:13.2458416Z === CONT  TestAccStreamProcessor_withTier
2026-02-24T01:09:13.2460501Z   diagnostic_detail=
2026-02-24T01:09:13.2463165Z    diagnostic_severity=ERROR diagnostic_summary="Invalid JSON String Value" tf_proto_version=6.10 tf_rpc=ValidateResourceConfig diagnostic_attribute="AttributeName(\"pipeline\")"
2026-02-24T01:09:13.2507570Z === NAME  TestAccStreamProcessor_withTier
2026-02-24T01:09:13.2508268Z     resource_test.go:63: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2508660Z         
2026-02-24T01:09:13.2508952Z         Error: error creating resource
2026-02-24T01:09:13.2509230Z         
2026-02-24T01:09:13.2509598Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2510312Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2510992Z           18: 	resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2511339Z         
2026-02-24T01:09:13.2512062Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2512496Z         type
2026-02-24T01:09:13.2513177Z --- FAIL: TestAccStreamProcessor_withTier (2.77s)
```

- 2026-02-25
  - PASS 13 seconds
  - PASS 10 seconds
- 2026-02-26 PASS 14 seconds
- 2026-02-27
  - PASS 10 seconds
  - PASS 16 seconds
- 2026-02-28 PASS 13 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 13 seconds
- 2026-03-03 PASS 12 seconds
- 2026-03-04 PASS 10 seconds
- 2026-03-05 PASS 12 seconds
- 2026-03-06 PASS 13 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 11 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 12 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 9 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 9 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 9)
Success rate: 75.68%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6983e6a1304923ebd185884b/containers | dev |  | 5.06s
[2026-02-06 00:56](#error-2026-02-06t0056070000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6985378713125e9acd9899c4/containers | dev |  | 6.00s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6986890dde0bdc0de28a2cba/containers | dev |  | 5.03s
[2026-02-07 03:05](#error-2026-02-07t0305490000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6986a7302145b0fd44859309/containers | dev |  | 6.03s
[2026-02-09 01:02](#error-2026-02-09t0102430000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/69892ce16faf4f440e809673/containers | dev |  | 6.06s
[2026-02-10 01:07](#error-2026-02-10t0107550000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/698a7f73fa1d9fd1d77b962e/containers | dev |  | 5.04s
[2026-02-11 01:02](#error-2026-02-11t0102110000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers | dev |  | 7.03s
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0609446Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0623315Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0647569Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-05T01:04:40.0648347Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-05T01:04:40.0648921Z         
2026-02-05T01:04:40.0650872Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a1304923ebd185884b/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6983e6a1304923ebd185884b. Reason: Conflict. Params: [6983e6a1304923ebd185884b], BadRequestDetail: 
2026-02-05T01:04:40.0652236Z         
2026-02-05T01:04:40.0652591Z           with mongodbatlas_network_container.test,
2026-02-05T01:04:40.0653864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-05T01:04:40.0654559Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-05T01:04:40.0654900Z         
2026-02-05T01:04:40.0656103Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.64s)
```

- 2026-02-06

### Error 2026-02-06T00:56:07+00:00
```
2026-02-06T00:56:07.9007369Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9016802Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9042132Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-06T00:56:07.9042896Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-06T00:56:07.9043466Z         
2026-02-06T00:56:07.9045381Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd9899c4/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6985378713125e9acd9899c4. Reason: Conflict. Params: [6985378713125e9acd9899c4], BadRequestDetail: 
2026-02-06T00:56:07.9046708Z         
2026-02-06T00:56:07.9047051Z           with mongodbatlas_network_container.test,
2026-02-06T00:56:07.9047734Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-06T00:56:07.9048628Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-06T00:56:07.9065153Z         
2026-02-06T00:56:07.9066610Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.04s)
```

- 2026-02-07
  - FAIL 5 seconds

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6080663Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6100102Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6124757Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T00:56:32.6125519Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-07T00:56:32.6126094Z         
2026-02-07T00:56:32.6127993Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890dde0bdc0de28a2cba/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6986890dde0bdc0de28a2cba. Reason: Conflict. Params: [6986890dde0bdc0de28a2cba], BadRequestDetail: 
2026-02-07T00:56:32.6129339Z         
2026-02-07T00:56:32.6129690Z           with mongodbatlas_network_container.test,
2026-02-07T00:56:32.6130372Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-07T00:56:32.6131025Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-07T00:56:32.6131355Z         
2026-02-07T00:56:32.6131644Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.29s)
```

  - FAIL 6 seconds

### Error 2026-02-07T03:05:49+00:00
```
2026-02-07T03:05:49.8321148Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8334957Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8366200Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-07T03:05:49.8366993Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-07T03:05:49.8367588Z         
2026-02-07T03:05:49.8369584Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986a7302145b0fd44859309/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6986a7302145b0fd44859309. Reason: Conflict. Params: [6986a7302145b0fd44859309], BadRequestDetail: 
2026-02-07T03:05:49.8370953Z         
2026-02-07T03:05:49.8371313Z           with mongodbatlas_network_container.test,
2026-02-07T03:05:49.8372030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-07T03:05:49.8372701Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-07T03:05:49.8373032Z         
2026-02-07T03:05:49.8373770Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.25s)
```

- 2026-02-08: MISSING
- 2026-02-09

### Error 2026-02-09T01:02:43+00:00
```
2026-02-09T01:02:43.7119717Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7138917Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7182320Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-09T01:02:43.7183647Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-09T01:02:43.7184658Z         
2026-02-09T01:02:43.7188081Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69892ce16faf4f440e809673/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 69892ce16faf4f440e809673. Reason: Conflict. Params: [69892ce16faf4f440e809673], BadRequestDetail: 
2026-02-09T01:02:43.7190590Z         
2026-02-09T01:02:43.7191193Z           with mongodbatlas_network_container.test,
2026-02-09T01:02:43.7192394Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-09T01:02:43.7193532Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-09T01:02:43.7194106Z         
2026-02-09T01:02:43.7196870Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (6.59s)
```

- 2026-02-10

### Error 2026-02-10T01:07:55+00:00
```
2026-02-10T01:07:55.4796396Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4822128Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4862478Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-10T01:07:55.4863892Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-10T01:07:55.4865182Z         
2026-02-10T01:07:55.4868732Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698a7f73fa1d9fd1d77b962e/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 698a7f73fa1d9fd1d77b962e. Reason: Conflict. Params: [698a7f73fa1d9fd1d77b962e], BadRequestDetail: 
2026-02-10T01:07:55.4871162Z         
2026-02-10T01:07:55.4871805Z           with mongodbatlas_network_container.test,
2026-02-10T01:07:55.4873069Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-10T01:07:55.4874280Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-10T01:07:55.4875186Z         
2026-02-10T01:07:55.4875754Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (5.44s)
```

- 2026-02-11

### Error 2026-02-11T01:02:11+00:00
```
2026-02-11T01:02:11.8416041Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8433824Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8481416Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-11T01:02:11.8482862Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-11T01:02:11.8483912Z         
2026-02-11T01:02:11.8488270Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698bd0c3ef616fcbf2cfb15e/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 698bd0c3ef616fcbf2cfb15e. Reason: Conflict. Params: [698bd0c3ef616fcbf2cfb15e], BadRequestDetail: 
2026-02-11T01:02:11.8490795Z         
2026-02-11T01:02:11.8491419Z           with mongodbatlas_network_container.test,
2026-02-11T01:02:11.8492655Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-11T01:02:11.8493838Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-11T01:02:11.8494420Z         
2026-02-11T01:02:11.8496352Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (7.33s)
```

- 2026-02-12
  - PASS 2 minutes
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6481818Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-12T18:47:25.6482888Z     resource_stream_connection_test.go:253: Creating execution project (1): test-acc-tf-p-8546980246753402558
2026-02-12T18:47:25.6483820Z     resource_stream_connection_test.go:253: 
2026-02-12T18:47:25.6485322Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6488365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6491484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6494428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6498144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:253
2026-02-12T18:47:25.6500231Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6501034Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6505580Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6508045Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-02-12T18:47:25.6511867Z         	Messages:   	Project creation failed: test-acc-tf-p-8546980246753402558, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6514393Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.24s)
```

- 2026-02-13 PASS 3 minutes
- 2026-02-14 PASS 2 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 2 minutes
- 2026-02-17 PASS 2 minutes
- 2026-02-18 PASS 2 minutes
- 2026-02-19 PASS 2 minutes
- 2026-02-20 PASS 3 minutes
- 2026-02-21 PASS 2 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2023808Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2037766Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2190884Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-02-24T01:09:13.2192039Z     resource_stream_connection_test.go:262: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-24T01:09:13.2193220Z         
2026-02-24T01:09:13.2194050Z         Error: error creating MongoDB Network Peering Container: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:09:13.2194663Z         
2026-02-24T01:09:13.2195017Z           with mongodbatlas_network_container.test,
2026-02-24T01:09:13.2195713Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-02-24T01:09:13.2196363Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-02-24T01:09:13.2196699Z         
2026-02-24T01:09:13.2197392Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (4.54s)
```

- 2026-02-25
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-26 PASS 2 minutes
- 2026-02-27
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-02-28 PASS 2 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 2 minutes
- 2026-03-03 PASS 2 minutes
- 2026-03-04 PASS 2 minutes
- 2026-03-05 PASS 2 minutes
- 2026-03-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 4 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 2 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 2 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 2 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

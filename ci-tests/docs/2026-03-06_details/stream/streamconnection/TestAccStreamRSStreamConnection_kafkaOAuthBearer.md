# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 1.05s
[2026-02-25 04:14](#error-2026-02-25t0414550000) |  | dev | timeout | 10802.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 8 seconds
- 2026-02-06 PASS 10 seconds
- 2026-02-07
  - PASS 10 seconds
  - PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 9 seconds
- 2026-02-10 PASS 9 seconds
- 2026-02-11 PASS 12 seconds
- 2026-02-12
  - PASS 8 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6414801Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-12T18:47:25.6415912Z     resource_stream_connection_test.go:182: Creating execution project (1): test-acc-tf-p-7187016505055028136
2026-02-12T18:47:25.6416860Z     resource_stream_connection_test.go:182: 
2026-02-12T18:47:25.6418522Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6421440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6424373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6427319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6430833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:182
2026-02-12T18:47:25.6432913Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6433916Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6438655Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6441185Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-12T18:47:25.6445048Z         	Messages:   	Project creation failed: test-acc-tf-p-7187016505055028136, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6447779Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (0.26s)
```

- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 9 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 9 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 8 seconds
- 2026-02-20 PASS 11 seconds
- 2026-02-21 PASS 10 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 11 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2004329Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-24T01:09:13.2038752Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-24T01:09:13.2143016Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-24T01:09:13.2144024Z     resource_stream_connection_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2144753Z         
2026-02-24T01:09:13.2145223Z         Error: error creating resource
2026-02-24T01:09:13.2145678Z         
2026-02-24T01:09:13.2146205Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2146913Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2147934Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2148494Z         
2026-02-24T01:09:13.2149315Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2149830Z         type
2026-02-24T01:09:13.2151782Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (1.48s)
```

- 2026-02-25
  - FAIL 3 hours

### Error 2026-02-25T04:14:55+00:00
```
2026-02-25T04:14:55.4761318Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-25T04:14:55.4781110Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-25T04:14:55.4820105Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-25T04:14:55.4820764Z     resource_stream_connection_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-02-25T04:14:55.4821248Z         
2026-02-25T04:14:55.4821642Z         Error: error waiting for stream connection to be ready
2026-02-25T04:14:55.4821999Z         
2026-02-25T04:14:55.4822353Z           with mongodbatlas_stream_connection.test,
2026-02-25T04:14:55.4823070Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-02-25T04:14:55.4823747Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-25T04:14:55.4824102Z         
2026-02-25T04:14:55.4824563Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-02-25T04:14:55.4825061Z         'NOT_FOUND', timeout: 3h0m0s)
2026-02-25T04:14:55.4825482Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (10802.31s)
```

  - PASS 12 seconds
- 2026-02-26 PASS 12 seconds
- 2026-02-27
  - PASS 9 seconds
  - PASS 13 seconds
- 2026-02-28 PASS 11 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 13 seconds
- 2026-03-03 PASS 10 seconds
- 2026-03-04 PASS 10 seconds
- 2026-03-05 PASS 11 seconds
- 2026-03-06 PASS 12 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-08 01:15](#error-2026-02-08t0115050000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/6987dd2182ac3ab802eb5a81/streams/test-acc-tf-s-23417028669450945/connections/kafka-conn-oauthbearer | qa | 9.04s

### Timeline
- 2026-02-04 PASS 12 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08

### Error 2026-02-08T01:15:05+00:00
```
2026-02-08T01:15:05.8556350Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-08T01:15:05.8570344Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-08T01:15:05.8597757Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-02-08T01:15:05.8598358Z     resource_stream_connection_test.go:216: Step 1/3 error: Error running apply: exit status 1
2026-02-08T01:15:05.8598924Z         
2026-02-08T01:15:05.8599198Z         Error: error fetching resource
2026-02-08T01:15:05.8599457Z         
2026-02-08T01:15:05.8599814Z           with data.mongodbatlas_stream_connection.test,
2026-02-08T01:15:05.8600456Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_stream_connection" "test":
2026-02-08T01:15:05.8601041Z           12: data "mongodbatlas_stream_connection" "test" {
2026-02-08T01:15:05.8601339Z         
2026-02-08T01:15:05.8602479Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6987dd2182ac3ab802eb5a81/streams/test-acc-tf-s-23417028669450945/connections/kafka-conn-oauthbearer
2026-02-08T01:15:05.8603445Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2026-02-08T01:15:05.8604121Z         Detail: Stream connection with name kafka-conn-oauthbearer for project
2026-02-08T01:15:05.8604799Z         6987dd2182ac3ab802eb5a81 and name test-acc-tf-s-23417028669450945 not found.
2026-02-08T01:15:05.8605496Z         Reason: Not Found. Params: [kafka-conn-oauthbearer 6987dd2182ac3ab802eb5a81
2026-02-08T01:15:05.8606090Z         test-acc-tf-s-23417028669450945], BadRequestDetail: 
2026-02-08T01:15:05.8606669Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (9.37s)
```

- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 8 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 10 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 11 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 8 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 10 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

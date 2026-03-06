# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.09s
[2026-02-27 01:14](#error-2026-02-27t0114580000) |  | dev |  | 6.05s
[2026-03-06 04:19](#error-2026-03-06t0419070000) |  | dev | timeout | 10802.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 11 seconds
- 2026-02-06 PASS 10 seconds
- 2026-02-07
  - PASS 19 seconds
  - PASS 12 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 9 seconds
- 2026-02-10 PASS 13 seconds
- 2026-02-11 PASS 11 seconds
- 2026-02-12
  - PASS 12 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6379449Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-12T18:47:25.6380535Z     resource_stream_connection_test.go:99: Creating execution project (1): test-acc-tf-p-4667970271334491023
2026-02-12T18:47:25.6381654Z     resource_stream_connection_test.go:99: 
2026-02-12T18:47:25.6383179Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6386098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6389192Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6392136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6395499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:106
2026-02-12T18:47:25.6399189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:99
2026-02-12T18:47:25.6400594Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6405159Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6407649Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-12T18:47:25.6411509Z         	Messages:   	Project creation failed: test-acc-tf-p-4667970271334491023, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6414081Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (0.23s)
```

- 2026-02-13 PASS 11 seconds
- 2026-02-14 PASS 12 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 11 seconds
- 2026-02-17 PASS 12 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 12 seconds
- 2026-02-20 PASS 13 seconds
- 2026-02-21 PASS 14 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 12 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.1999824Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2001123Z     resource_stream_connection_test.go:99: Creating execution project (1): test-acc-tf-p-7083255240452688805
2026-02-24T01:09:13.2002807Z     resource_stream_connection_test.go:99: Creating execution stream instance: test-acc-tf-s-9143864225822660744
2026-02-24T01:09:13.2035004Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2090619Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-24T01:09:13.2091249Z     resource_stream_connection_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2092055Z         
2026-02-24T01:09:13.2092363Z         Error: error creating resource
2026-02-24T01:09:13.2092648Z         
2026-02-24T01:09:13.2093328Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2094768Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2095535Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2095885Z         
2026-02-24T01:09:13.2096376Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2096800Z         type
2026-02-24T01:09:13.2151091Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (4.88s)
```

- 2026-02-25
  - PASS 11 seconds
  - PASS 10 seconds
- 2026-02-26 PASS 17 seconds
- 2026-02-27
  - FAIL 6 seconds

### Error 2026-02-27T01:14:58+00:00
```
2026-02-27T01:14:58.8722544Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-27T01:14:58.8750865Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-27T01:14:58.8804406Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-02-27T01:14:58.8805590Z     resource_stream_connection_test.go:100: Step 2/3 error: Error running apply: exit status 1
2026-02-27T01:14:58.8806437Z         
2026-02-27T01:14:58.8807149Z         Error: Provider produced inconsistent result after apply
2026-02-27T01:14:58.8807786Z         
2026-02-27T01:14:58.8808657Z         When applying changes to mongodbatlas_stream_connection.test, provider
2026-02-27T01:14:58.8810059Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-02-27T01:14:58.8811136Z         unexpected new value: .bootstrap_servers: was
2026-02-27T01:14:58.8811932Z         cty.StringVal("localhost:9093"), but now
2026-02-27T01:14:58.8812722Z         cty.StringVal("localhost:9092,localhost:9092").
2026-02-27T01:14:58.8813267Z         
2026-02-27T01:14:58.8814103Z         This is a bug in the provider, which should be reported in the provider's own
2026-02-27T01:14:58.8814883Z         issue tracker.
2026-02-27T01:14:58.8816506Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (6.55s)
```

  - PASS 14 seconds
- 2026-02-28 PASS 15 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 13 seconds
- 2026-03-03 PASS 33 seconds
- 2026-03-04 PASS 11 seconds
- 2026-03-05 PASS a minute
- 2026-03-06

### Error 2026-03-06T04:19:07+00:00
```
2026-03-06T04:19:07.4167370Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-03-06T04:19:07.4196005Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-03-06T04:19:07.4254344Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-03-06T04:19:07.4255449Z     resource_stream_connection_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-03-06T04:19:07.4256250Z         
2026-03-06T04:19:07.4256912Z         Error: error waiting for stream connection to be ready
2026-03-06T04:19:07.4257496Z         
2026-03-06T04:19:07.4258096Z           with mongodbatlas_stream_connection.test,
2026-03-06T04:19:07.4259571Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-03-06T04:19:07.4260739Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-03-06T04:19:07.4261320Z         
2026-03-06T04:19:07.4262126Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-03-06T04:19:07.4262951Z         'NOT_FOUND', timeout: 3h0m0s)
2026-03-06T04:19:07.4263641Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (10802.19s)
```


## QA Environment
### Timeline
- 2026-02-04 PASS 12 seconds
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
- 2026-02-15 PASS 9 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 9 seconds
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
- 2026-03-01 PASS 11 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 10 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

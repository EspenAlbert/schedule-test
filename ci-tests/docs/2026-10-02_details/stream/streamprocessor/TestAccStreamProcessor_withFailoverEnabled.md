# stream/streamprocessor/TestAccStreamProcessor_withFailoverEnabled Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-09 02:19](#error-2026-09-09t0219320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-3320098280572924660/processor | dev |  | 877.04s
[2026-09-10 02:13](#error-2026-09-10t0213360000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-3349132691709787219/processor | dev |  | 807.07s
[2026-09-11 03:49](#error-2026-09-11t0349320000) |  | dev | timeout | 3601.03s
[2026-09-15 01:40](#error-2026-09-15t0140260000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa894b95fcf07afdd9b1fed/streams/test-acc-tf-8043190718658515897/connections | dev |  | 816.08s
[2026-09-16 01:37](#error-2026-09-16t0137530000) | VALIDATION_ERROR /api/atlas/v2/groups/6aa9e5d7bb07cf48935ec75c/streams/test-acc-tf-1930832212534139255/connections | dev |  | 876.02s
[2026-09-17 01:38](#error-2026-09-17t0138500000) | API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections | dev | unknown | 879.02s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 14 minutes
- 2026-09-03 PASS 13 minutes
- 2026-09-04 PASS 21 minutes
- 2026-09-05 PASS 13 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 14 minutes
- 2026-09-08 PASS 14 minutes
- 2026-09-09

### Error 2026-09-09T02:19:32+00:00
```
2026-09-09T02:19:32.8657617Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-09T02:19:32.8658368Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-4114080881567275363
2026-09-09T02:19:32.9306291Z === CONT  TestAccStreamProcessor_withFailoverEnabled
2026-09-09T02:19:32.9321163Z    test_terraform_path=/home/runner/work/_temp/ddd9fd78-c493-43ca-bf05-24800b4857e3/terraform test_working_directory=/tmp/plugintest2629724185 test_step_number=1
2026-09-09T02:19:32.9371216Z === NAME  TestAccStreamProcessor_withFailoverEnabled
2026-09-09T02:19:32.9371791Z     resource_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-09-09T02:19:32.9372233Z         
2026-09-09T02:19:32.9372563Z         Error: error creating resource
2026-09-09T02:19:32.9372884Z         
2026-09-09T02:19:32.9373293Z           with mongodbatlas_stream_processor.processor,
2026-09-09T02:19:32.9374058Z           on terraform_plugin_test.tf line 58, in resource "mongodbatlas_stream_processor" "processor":
2026-09-09T02:19:32.9374779Z           58: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-09T02:19:32.9375168Z         
2026-09-09T02:19:32.9376052Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-3320098280572924660/processor
2026-09-09T02:19:32.9376931Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T02:19:32.9377641Z         Detail: Streams Processor with this name (new-processor-failover-2kg99) had a
2026-09-09T02:19:32.9378361Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-09T02:19:32.9379629Z         Params: [new-processor-failover-2kg99 commandName does not exist in context],
2026-09-09T02:19:32.9380154Z         BadRequestDetail: 
2026-09-09T02:19:32.9393038Z   
2026-09-09T02:19:32.9412843Z === NAME  TestAccStreamProcessor_withFailoverEnabled
2026-09-09T02:19:32.9413489Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-09T02:19:32.9413980Z         
2026-09-09T02:19:32.9414319Z         Error: error during resource delete
2026-09-09T02:19:32.9414646Z         
2026-09-09T02:19:32.9415363Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ab97f33137a6ca47b3aa/streams/test-acc-tf-3320098280572924660
2026-09-09T02:19:32.9416162Z         DELETE: HTTP 403 Forbidden (Error code:
2026-09-09T02:19:32.9416768Z         "STREAM_TENANT_HAS_STREAM_PROCESSORS") Detail: Stream workspace with name
2026-09-09T02:19:32.9417482Z         test-acc-tf-3320098280572924660 has active processors, and cannot be changed.
2026-09-09T02:19:32.9418133Z         Reason: Forbidden. Params: [test-acc-tf-3320098280572924660],
2026-09-09T02:19:32.9418724Z         BadRequestDetail: 
2026-09-09T02:19:32.9419120Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (877.40s)
```

- 2026-09-10

### Error 2026-09-10T02:13:36+00:00
```
2026-09-10T02:13:36.6599029Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-10T02:13:36.6599497Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-7279594187342890389
2026-09-10T02:13:36.7012028Z === CONT  TestAccStreamProcessor_withFailoverEnabled
2026-09-10T02:13:36.7023552Z    test_name=TestAccStreamProcessor_workspaceNameAliasMigration test_step_number=1 test_terraform_path=/home/runner/work/_temp/8cc92e9c-1de6-438b-a445-0c9c104f9a5a/terraform
2026-09-10T02:13:36.7063015Z === NAME  TestAccStreamProcessor_withFailoverEnabled
2026-09-10T02:13:36.7063461Z     resource_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-09-10T02:13:36.7063798Z         
2026-09-10T02:13:36.7064063Z         Error: error creating resource
2026-09-10T02:13:36.7064318Z         
2026-09-10T02:13:36.7064653Z           with mongodbatlas_stream_processor.processor,
2026-09-10T02:13:36.7065265Z           on terraform_plugin_test.tf line 58, in resource "mongodbatlas_stream_processor" "processor":
2026-09-10T02:13:36.7065957Z           58: 	resource "mongodbatlas_stream_processor" "processor" {
2026-09-10T02:13:36.7066268Z         
2026-09-10T02:13:36.7066890Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fc8f4ab31ba34524238a/streams/test-acc-tf-3349132691709787219/processor
2026-09-10T02:13:36.7067753Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T02:13:36.7068323Z         Detail: Streams Processor with this name (new-processor-failover-mkcze) had a
2026-09-10T02:13:36.7068893Z         problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T02:13:36.7069464Z         Params: [new-processor-failover-mkcze commandName does not exist in context],
2026-09-10T02:13:36.7069866Z         BadRequestDetail: 
2026-09-10T02:13:36.7070567Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (807.69s)
```

- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T03:49:32+00:00
```
2026-09-11T03:49:32.5871420Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-11T03:49:32.5872083Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-256649160407534765
2026-09-11T03:49:32.5872622Z     resource_test.go:94: 
2026-09-11T03:49:32.5873506Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:68
2026-09-11T03:49:32.5874892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-09-11T03:49:32.5876577Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:179
2026-09-11T03:49:32.5878038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:94
2026-09-11T03:49:32.5878699Z         	Error:      	Received unexpected error:
2026-09-11T03:49:32.5879667Z         	            	cluster creation failed: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-09-11T03:49:32.5880288Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-09-11T03:49:32.5880810Z         	Messages:   	Cluster creation failed: test-acc-tf-c-256649160407534765
2026-09-11T03:49:32.5881242Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (3601.28s)
```

  - PASS 14 minutes
- 2026-09-12 PASS 14 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 13 minutes
- 2026-09-15

### Error 2026-09-15T01:40:26+00:00
```
2026-09-15T01:40:26.7380470Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-15T01:40:26.7381074Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-7727066175651327568
2026-09-15T01:40:26.7469827Z === CONT  TestAccStreamProcessor_withFailoverEnabled
2026-09-15T01:40:26.7484223Z   
2026-09-15T01:40:26.7484787Z     resource_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-09-15T01:40:26.7485224Z         
2026-09-15T01:40:26.7485554Z         Error: error creating resource
2026-09-15T01:40:26.7485865Z         
2026-09-15T01:40:26.7486295Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-15T01:40:26.7487106Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-15T01:40:26.7487871Z           42: 	resource "mongodbatlas_stream_connection" "kafka_dest" {
2026-09-15T01:40:26.7488269Z         
2026-09-15T01:40:26.7489384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa894b95fcf07afdd9b1fed/streams/test-acc-tf-8043190718658515897/connections
2026-09-15T01:40:26.7490294Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-15T01:40:26.7491001Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-15T01:40:26.7491738Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-15T01:40:26.7492303Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (816.76s)
```

- 2026-09-16

### Error 2026-09-16T01:37:53+00:00
```
2026-09-16T01:37:53.6868329Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-16T01:37:53.6868929Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-9193360144186615867
2026-09-16T01:37:53.6950261Z === CONT  TestAccStreamProcessor_withFailoverEnabled
2026-09-16T01:37:53.6964985Z   
2026-09-16T01:37:53.6965553Z     resource_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-09-16T01:37:53.6965990Z         
2026-09-16T01:37:53.6966327Z         Error: error creating resource
2026-09-16T01:37:53.6966652Z         
2026-09-16T01:37:53.6967082Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-16T01:37:53.6967879Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-16T01:37:53.6968626Z           42: 	resource "mongodbatlas_stream_connection" "kafka_dest" {
2026-09-16T01:37:53.6969026Z         
2026-09-16T01:37:53.6969986Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa9e5d7bb07cf48935ec75c/streams/test-acc-tf-1930832212534139255/connections
2026-09-16T01:37:53.6970886Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-16T01:37:53.6971596Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-16T01:37:53.6972329Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-16T01:37:53.6972888Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (876.20s)
```

- 2026-09-17

### Error 2026-09-17T01:38:50+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2026-09-17T01:38:50.273000+00:00-TestAccStreamProcessor_withFailoverEnabled',confidence=1.0,ts_when='15 days ago')
API Error VALIDATION_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/connections
```
2026-09-17T01:38:50.2733681Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-09-17T01:38:50.2734249Z     resource_test.go:94: Creating execution cluster: test-acc-tf-c-1379244295456912989
2026-09-17T01:38:50.2808621Z === CONT  TestAccStreamProcessor_withFailoverEnabled
2026-09-17T01:38:50.2821559Z    test_name=TestAccStreamProcessor_withFailoverEnabled
2026-09-17T01:38:50.2822203Z     resource_test.go:100: Step 1/3 error: Error running apply: exit status 1
2026-09-17T01:38:50.2822621Z         
2026-09-17T01:38:50.2822946Z         Error: error creating resource
2026-09-17T01:38:50.2823262Z         
2026-09-17T01:38:50.2823677Z           with mongodbatlas_stream_connection.kafka_dest,
2026-09-17T01:38:50.2824418Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_stream_connection" "kafka_dest":
2026-09-17T01:38:50.2825119Z           42: 	resource "mongodbatlas_stream_connection" "kafka_dest" {
2026-09-17T01:38:50.2825498Z         
2026-09-17T01:38:50.2826246Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aab376bb7babdea2c8b89b6/streams/test-acc-tf-4234101308113625187/connections
2026-09-17T01:38:50.2827068Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2026-09-17T01:38:50.2827718Z         request content produced the validation error: Invalid bootstrapServers.
2026-09-17T01:38:50.2828406Z         Reason: Bad Request. Params: [Invalid bootstrapServers], BadRequestDetail: 
2026-09-17T01:38:50.2828934Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (879.21s)
```

- 2026-09-18 PASS 14 minutes
- 2026-09-19 PASS 13 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 13 minutes
- 2026-09-22 PASS 14 minutes
- 2026-09-23 PASS 13 minutes
- 2026-09-24 PASS 14 minutes
- 2026-09-25 PASS 13 minutes
- 2026-09-26 PASS 14 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 14 minutes
- 2026-09-29
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2026-09-30
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2026-10-01 PASS 13 minutes
- 2026-10-02 PASS 14 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 12 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 14 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 13 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 13 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 15 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 14 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING

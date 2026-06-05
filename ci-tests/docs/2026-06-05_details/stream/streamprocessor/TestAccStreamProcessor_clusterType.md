# stream/streamprocessor/TestAccStreamProcessor_clusterType Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.06s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6a1e2eaff41b0149dfdf862a/streams/test-acc-tf-s-642902902152046263/processor | dev | 739.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09
  - PASS 11 seconds
  - PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 12 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 12 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 10 seconds
- 2026-05-20
  - PASS 10 seconds
  - PASS 12 seconds
- 2026-05-21 PASS 9 seconds
- 2026-05-22 PASS 10 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 10 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5643992Z === RUN   TestAccStreamProcessor_clusterType
2026-05-28T02:40:17.5644655Z     resource_test.go:315: Creating execution project (1): test-acc-tf-p-4943857955044635347
2026-05-28T02:40:17.5645267Z     resource_test.go:315: 
2026-05-28T02:40:17.5646188Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5648198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5650282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5652412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5654613Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:315
2026-05-28T02:40:17.5656011Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:40:17.5656553Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5659951Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5661754Z         	Test:       	TestAccStreamProcessor_clusterType
2026-05-28T02:40:17.5664475Z         	Messages:   	Project creation failed: test-acc-tf-p-4943857955044635347, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5666319Z --- FAIL: TestAccStreamProcessor_clusterType (1.65s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30 PASS 9 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5773680Z === RUN   TestAccStreamProcessor_clusterType
2026-06-02T01:54:34.5774251Z     resource_test.go:316: Creating execution cluster: test-acc-tf-c-3820644571605916958
2026-06-02T01:54:34.5790787Z    test_working_directory=/tmp/plugintest2104523353 test_step_number=1
2026-06-02T01:54:34.5791388Z     resource_test.go:322: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:54:34.5791798Z         
2026-06-02T01:54:34.5792112Z         Error: error creating resource
2026-06-02T01:54:34.5792417Z         
2026-06-02T01:54:34.5792810Z           with mongodbatlas_stream_processor.processor,
2026-06-02T01:54:34.5793542Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-06-02T01:54:34.5794220Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-06-02T01:54:34.5794583Z         
2026-06-02T01:54:34.5795397Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2eaff41b0149dfdf862a/streams/test-acc-tf-s-642902902152046263/processor
2026-06-02T01:54:34.5796234Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-06-02T01:54:34.5796903Z         Detail: Streams Processor with this name (new-processorah6t1) had a problem
2026-06-02T01:54:34.5797575Z         occur: connection named ClusterConnectionSrcah6t1 does not exist. Check
2026-06-02T01:54:34.5798254Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-06-02T01:54:34.5798946Z         [new-processorah6t1 connection named ClusterConnectionSrcah6t1 does not
2026-06-02T01:54:34.5799578Z         exist. Check sp.listConnections() for available connections],
2026-06-02T01:54:34.5800010Z         BadRequestDetail: 
2026-06-02T01:54:34.5800361Z --- FAIL: TestAccStreamProcessor_clusterType (739.70s)
```

- 2026-06-03 PASS 8 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-24 02:09](#error-2026-05-24t0209560000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6a124e070756d72c22344f82/streams/test-acc-tf-s-130238137566666215/processor | qa |  | 2.04s
[2026-05-31 02:22](#error-2026-05-31t0222320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6a1b89715090848708f7123d/streams/test-acc-tf-s-529063259465365969/processor | qa | flaky_500 | 1.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 8 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T02:09:56+00:00
```
2026-05-24T02:09:56.4049603Z === RUN   TestAccStreamProcessor_clusterType
2026-05-24T02:09:56.4055687Z === CONT  TestAccStreamProcessor_clusterType
2026-05-24T02:09:56.4059039Z   diagnostic_detail=
2026-05-24T02:09:56.4061031Z   
2026-05-24T02:09:56.4082325Z === NAME  TestAccStreamProcessor_clusterType
2026-05-24T02:09:56.4082874Z     resource_test.go:322: Step 1/1 error: Error running apply: exit status 1
2026-05-24T02:09:56.4083307Z         
2026-05-24T02:09:56.4083649Z         Error: error creating resource
2026-05-24T02:09:56.4083977Z         
2026-05-24T02:09:56.4084392Z           with mongodbatlas_stream_processor.processor,
2026-05-24T02:09:56.4085385Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-05-24T02:09:56.4086126Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-05-24T02:09:56.4086514Z         
2026-05-24T02:09:56.4087295Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a124e070756d72c22344f82/streams/test-acc-tf-s-130238137566666215/processor
2026-05-24T02:09:56.4088178Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-05-24T02:09:56.4088894Z         Detail: Streams Processor with this name (new-processordsggr) had a problem
2026-05-24T02:09:56.4089612Z         occur: connection named ClusterConnectionSrcdsggr does not exist. Check
2026-05-24T02:09:56.4090325Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-05-24T02:09:56.4091047Z         [new-processordsggr connection named ClusterConnectionSrcdsggr does not
2026-05-24T02:09:56.4091690Z         exist. Check sp.listConnections() for available connections],
2026-05-24T02:09:56.4092141Z         BadRequestDetail: 
2026-05-24T02:09:56.4092504Z --- FAIL: TestAccStreamProcessor_clusterType (2.41s)
```

- 2026-05-25 PASS 11 seconds
- 2026-05-26 PASS 9 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T02:22:32+00:00
```
2026-05-31T02:22:32.6460880Z === RUN   TestAccStreamProcessor_clusterType
2026-05-31T02:22:32.6481228Z    test_name=TestAccStreamProcessor_clusterType test_terraform_path=/home/runner/work/_temp/2e91038e-2a3f-449d-a5b5-c7111702b5fa/terraform test_working_directory=/tmp/plugintest4182306336
2026-05-31T02:22:32.6482513Z     resource_test.go:322: Step 1/1 error: Error running apply: exit status 1
2026-05-31T02:22:32.6483025Z         
2026-05-31T02:22:32.6483408Z         Error: error creating resource
2026-05-31T02:22:32.6483775Z         
2026-05-31T02:22:32.6484262Z           with mongodbatlas_stream_processor.processor,
2026-05-31T02:22:32.6485201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-05-31T02:22:32.6486072Z           12: 	resource "mongodbatlas_stream_processor" "processor" {
2026-05-31T02:22:32.6486575Z         
2026-05-31T02:22:32.6487504Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b89715090848708f7123d/streams/test-acc-tf-s-529063259465365969/processor
2026-05-31T02:22:32.6488530Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-05-31T02:22:32.6489500Z         Detail: Streams Processor with this name (new-processorg7fz2) had a problem
2026-05-31T02:22:32.6490406Z         occur: connection named ClusterConnectionSrcg7fz2 does not exist. Check
2026-05-31T02:22:32.6491289Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-05-31T02:22:32.6492173Z         [new-processorg7fz2 connection named ClusterConnectionSrcg7fz2 does not
2026-05-31T02:22:32.6492938Z         exist. Check sp.listConnections() for available connections],
2026-05-31T02:22:32.6493476Z         BadRequestDetail: 
2026-05-31T02:22:32.6493957Z --- FAIL: TestAccStreamProcessor_clusterType (1.38s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

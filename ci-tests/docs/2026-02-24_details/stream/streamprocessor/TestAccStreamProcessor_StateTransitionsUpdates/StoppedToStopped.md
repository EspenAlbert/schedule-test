# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.06s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 5.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 8 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 9 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 9 seconds
- 2026-02-03
  - PASS 16 seconds
  - PASS 14 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5511855Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-04T00:54:41.5512551Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-04T00:54:41.5521029Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-04T00:54:41.5543614Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-04T00:54:41.5544237Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-04T00:54:41.5544609Z         
2026-02-04T00:54:41.5544885Z         Error: error creating resource
2026-02-04T00:54:41.5545166Z         
2026-02-04T00:54:41.5545518Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5546185Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5546812Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5547159Z         
2026-02-04T00:54:41.5547908Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5548683Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5549318Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-02-04T00:54:41.5549961Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5550593Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5551238Z         [processor-stopped-to-stopped connection named sample_stream_solar does not
2026-02-04T00:54:41.5551834Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5552238Z         BadRequestDetail: 
2026-02-04T00:54:41.5561196Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform test_working_directory=/tmp/plugintest2504655388 test_step_number=1
2026-02-04T00:54:41.5671004Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.69s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0718617Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-05T01:04:40.0719367Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-05T01:04:40.0722541Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-05T01:04:40.0776091Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-05T01:04:40.0776840Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-05T01:04:40.0777320Z         
2026-02-05T01:04:40.0777660Z         Error: error creating resource
2026-02-05T01:04:40.0777948Z         
2026-02-05T01:04:40.0778323Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0779204Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0779894Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0780245Z         
2026-02-05T01:04:40.0781129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0781989Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0782680Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-02-05T01:04:40.0783475Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0784157Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0784997Z         [processor-stopped-to-stopped connection named sample_stream_solar does not
2026-02-05T01:04:40.0785795Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0786211Z         BadRequestDetail: 
2026-02-05T01:04:40.0803619Z   
2026-02-05T01:04:40.0896259Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.56s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.568000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped',confidence=1.0,ts_when='17 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5684607Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-06T00:56:32.5685987Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-06T00:56:32.5691070Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-06T00:56:32.5723994Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-06T00:56:32.5725222Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-06T00:56:32.5725905Z         
2026-02-06T00:56:32.5726401Z         Error: error creating resource
2026-02-06T00:56:32.5726929Z         
2026-02-06T00:56:32.5727573Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5728887Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5730117Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5730976Z         
2026-02-06T00:56:32.5732358Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5733878Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5735175Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-02-06T00:56:32.5736421Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5737657Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5738914Z         [processor-stopped-to-stopped connection named sample_stream_solar does not
2026-02-06T00:56:32.5740079Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5740954Z         BadRequestDetail: 
2026-02-06T00:56:32.5771283Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5892558Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.57s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6178174Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-07T00:56:32.6178927Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-07T00:56:32.6181132Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-07T00:56:32.6290802Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-07T00:56:32.6291521Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-07T00:56:32.6291907Z         
2026-02-07T00:56:32.6292201Z         Error: error creating resource
2026-02-07T00:56:32.6292476Z         
2026-02-07T00:56:32.6292990Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6293707Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6294385Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6294727Z         
2026-02-07T00:56:32.6295482Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6296318Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6296993Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2026-02-07T00:56:32.6297806Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6298467Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6299168Z         [processor-stopped-to-stopped connection named sample_stream_solar does not
2026-02-07T00:56:32.6299788Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6300206Z         BadRequestDetail: 
2026-02-07T00:56:32.6316603Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/5ba02dfd-50c6-4d59-9ca4-2e4dd9b61655/terraform test_working_directory=/tmp/plugintest1162602647
2026-02-07T00:56:32.6357033Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.81s)
```

  - PASS 8 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 8 seconds
- 2026-02-10 PASS 8 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12
  - PASS 8 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7889126Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-12T18:47:26.7890515Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-12T18:47:26.7891912Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-1088218515576139854
2026-02-12T18:47:26.7892746Z     resource_test.go:237: 
2026-02-12T18:47:26.7894326Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7897587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7900775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7903942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7907308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.7910840Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.7912252Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7917224Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7920148Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-12T18:47:26.7924424Z         	Messages:   	Project creation failed: test-acc-tf-p-1088218515576139854, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8122525Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.23s)
```

- 2026-02-13 PASS 10 seconds
- 2026-02-14 PASS 10 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 8 seconds
- 2026-02-18 PASS 9 seconds
- 2026-02-19 PASS 9 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 8 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 8 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2242953Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-24T01:09:13.2243715Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-02-24T01:09:13.2254729Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-24T01:09:13.2264595Z   
2026-02-24T01:09:13.2344339Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-24T01:09:13.2344947Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2345348Z         
2026-02-24T01:09:13.2346157Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2026-02-24T01:09:13.2346767Z         
2026-02-24T01:09:13.2347130Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2347857Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2348535Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2348880Z         
2026-02-24T01:09:13.2349351Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2349769Z         type
2026-02-24T01:09:13.2354185Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (5.49s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 8 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 8 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 9 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING

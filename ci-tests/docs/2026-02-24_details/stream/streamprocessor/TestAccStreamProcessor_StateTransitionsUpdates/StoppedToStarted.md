# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 2.01s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.06s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 10 seconds
- 2026-01-28 PASS 8 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 10 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 9 seconds
- 2026-02-03
  - PASS 17 seconds
  - PASS 17 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5510166Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5510812Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-04T00:54:41.5521509Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5542857Z    test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform test_step_number=1 test_working_directory=/tmp/plugintest3090082585
2026-02-04T00:54:41.5617299Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5617990Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-04T00:54:41.5618369Z         
2026-02-04T00:54:41.5618649Z         Error: error creating resource
2026-02-04T00:54:41.5618936Z         
2026-02-04T00:54:41.5619291Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5619953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5620590Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5620941Z         
2026-02-04T00:54:41.5621628Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5622389Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5623022Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-04T00:54:41.5623648Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5624277Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5624917Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-04T00:54:41.5625501Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5625891Z         BadRequestDetail: 
2026-02-04T00:54:41.5635302Z   
2026-02-04T00:54:41.5673814Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.72s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0716865Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0717526Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-05T01:04:40.0723443Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0743575Z   
2026-02-05T01:04:40.0857997Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0858816Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-05T01:04:40.0859199Z         
2026-02-05T01:04:40.0859480Z         Error: error creating resource
2026-02-05T01:04:40.0859752Z         
2026-02-05T01:04:40.0860121Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0860849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0861672Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0862022Z         
2026-02-05T01:04:40.0862769Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0863741Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0864420Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-05T01:04:40.0865105Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0865771Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0866475Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-05T01:04:40.0867108Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0867513Z         BadRequestDetail: 
2026-02-05T01:04:40.0884819Z   
2026-02-05T01:04:40.0898228Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (2.06s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.568000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted',confidence=1.0,ts_when='17 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5681156Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5682572Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-06T00:56:32.5692001Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5772191Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5772964Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-06T00:56:32.5773450Z         
2026-02-06T00:56:32.5773791Z         Error: error creating resource
2026-02-06T00:56:32.5774133Z         
2026-02-06T00:56:32.5774683Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5775700Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5776538Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5776966Z         
2026-02-06T00:56:32.5777894Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5778952Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5779796Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-06T00:56:32.5780842Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5781714Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5782587Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-06T00:56:32.5783367Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5783869Z         BadRequestDetail: 
2026-02-06T00:56:32.5801679Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform
2026-02-06T00:56:32.5893241Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.64s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6176348Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-07T00:56:32.6177039Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-07T00:56:32.6181650Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-07T00:56:32.6263827Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-07T00:56:32.6264426Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-07T00:56:32.6264906Z         
2026-02-07T00:56:32.6265194Z         Error: error creating resource
2026-02-07T00:56:32.6265476Z         
2026-02-07T00:56:32.6265844Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6266573Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6267358Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6267710Z         
2026-02-07T00:56:32.6268459Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6269303Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6269980Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-07T00:56:32.6270665Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6271443Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6272287Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-07T00:56:32.6273088Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6273509Z         BadRequestDetail: 
2026-02-07T00:56:32.6290210Z    test_terraform_path=/home/runner/work/_temp/5ba02dfd-50c6-4d59-9ca4-2e4dd9b61655/terraform
2026-02-07T00:56:32.6356375Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.81s)
```

  - PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 10 seconds
- 2026-02-10 PASS 9 seconds
- 2026-02-11 PASS 11 seconds
- 2026-02-12
  - PASS 8 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8081999Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-12T18:47:26.8083320Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-12T18:47:26.8084622Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-1686702785687744569
2026-02-12T18:47:26.8085472Z     resource_test.go:237: 
2026-02-12T18:47:26.8087066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8090402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8094569Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8098036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8101393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8104717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.8106161Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8111441Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8114233Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-12T18:47:26.8118636Z         	Messages:   	Project creation failed: test-acc-tf-p-1686702785687744569, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8129285Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.23s)
```

- 2026-02-13 PASS 10 seconds
- 2026-02-14 PASS 9 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 9 seconds
- 2026-02-17 PASS 10 seconds
- 2026-02-18 PASS 10 seconds
- 2026-02-19 PASS 9 seconds
- 2026-02-20 PASS 9 seconds
- 2026-02-21 PASS 9 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 12 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2240836Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-24T01:09:13.2241657Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-24T01:09:13.2252234Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-24T01:09:13.2298994Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-24T01:09:13.2299597Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2299981Z         
2026-02-24T01:09:13.2300797Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2026-02-24T01:09:13.2301523Z         
2026-02-24T01:09:13.2302026Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2302775Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2303466Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2303811Z         
2026-02-24T01:09:13.2304295Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2304737Z         type
2026-02-24T01:09:13.2310929Z   
2026-02-24T01:09:13.2352253Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (2.77s)
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
- 2026-02-15 PASS 10 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 9 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING

# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 6.06s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 6.08s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 7.02s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 6 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09
  - PASS 6 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1432622Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-09T01:47:38.1433360Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-05-09T01:47:38.1434305Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-8302800621130495104
2026-05-09T01:47:38.1434832Z     resource_test.go:237: 
2026-05-09T01:47:38.1435750Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1437564Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1439375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1441388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1443452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1445388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1446203Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1448141Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1449343Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-09T01:47:38.1451209Z         	Messages:   	Project creation failed: test-acc-tf-p-8302800621130495104, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1456904Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (69.50s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 7 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 7 seconds
- 2026-05-20
  - FAIL 6 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2468971Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T01:51:33.2469852Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-05-20T01:51:33.2484469Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T01:51:33.2500574Z   
2026-05-20T01:51:33.2545840Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T01:51:33.2546627Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2547130Z         
2026-05-20T01:51:33.2547688Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2548135Z         
2026-05-20T01:51:33.2548759Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2549627Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2550248Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2550935Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2551866Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2552651Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2553276Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2553917Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2554617Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2555278Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2555993Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2556784Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2559087Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2560383Z         
2026-05-20T01:51:33.2560998Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2561698Z         issue tracker.
2026-05-20T01:51:33.2577882Z   
2026-05-20T01:51:33.2692564Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (6.63s)
```

  - FAIL 6 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2622468Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T13:17:06.2623223Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-05-20T13:17:06.2634448Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T13:17:06.2691143Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T13:17:06.2692360Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2692996Z         
2026-05-20T13:17:06.2693658Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2694219Z         
2026-05-20T13:17:06.2709485Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2710689Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2711725Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2712648Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2713699Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2714722Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2715547Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2716359Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2717265Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2718135Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2719087Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2720102Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2723089Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2724782Z         
2026-05-20T13:17:06.2725577Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2726295Z         issue tracker.
2026-05-20T13:17:06.2747102Z    test_step_number=2
2026-05-20T13:17:06.2884263Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (6.80s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6387440Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-21T01:56:32.6388135Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-05-21T01:56:32.6393270Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-21T01:56:32.6407828Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-21T01:56:32.6408453Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6408862Z         
2026-05-21T01:56:32.6409279Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6409651Z         
2026-05-21T01:56:32.6410160Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6410848Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6411352Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6411915Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6412601Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6413245Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6413764Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6414298Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6415076Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6415616Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6416200Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6416833Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6418559Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6419580Z         
2026-05-21T01:56:32.6420075Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6420534Z         issue tracker.
2026-05-21T01:56:32.6433481Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_terraform_path=/home/runner/work/_temp/277302f5-8cc5-47c6-894d-c47ed5af024c/terraform
2026-05-21T01:56:32.6568215Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (7.16s)
```

- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS 8 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5416345Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-28T02:40:17.5417066Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-05-28T02:40:17.5418023Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-3703958986419743008
2026-05-28T02:40:17.5418522Z     resource_test.go:237: 
2026-05-28T02:40:17.5419430Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5421368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5423173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5425145Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5427044Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5429211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5430019Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5432825Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5434366Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-28T02:40:17.5436805Z         	Messages:   	Project creation failed: test-acc-tf-p-3703958986419743008, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5485662Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.84s)
```

- 2026-05-29 PASS 7 seconds
- 2026-05-30 PASS 6 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5709500Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-06-02T01:54:34.5710362Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-06-02T01:54:34.5711170Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-4698760835819953600
2026-06-02T01:54:34.5711752Z     resource_test.go:237: 
2026-06-02T01:54:34.5712785Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5714644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5716472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5718393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5720612Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-06-02T01:54:34.5722584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-06-02T01:54:34.5723468Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5725652Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5726888Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-06-02T01:54:34.5728966Z         	Messages:   	Project creation failed: test-acc-tf-p-4698760835819953600, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5740175Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (69.50s)
```

- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 6 seconds
- 2026-06-05 PASS 5 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a minute
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 7 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 seconds
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 7 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 5 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 8.01s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 6.04s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 8.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 7 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09
  - PASS 6 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1319013Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-09T01:47:38.1319758Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-05-09T01:47:38.1320517Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-2833935987560481901
2026-05-09T01:47:38.1321020Z     resource_test.go:237: 
2026-05-09T01:47:38.1322136Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1323944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1325742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1327535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1329421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1331342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1332525Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1334865Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1336492Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-09T01:47:38.1338646Z         	Messages:   	Project creation failed: test-acc-tf-p-2833935987560481901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1453237Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (64.86s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 8 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 9 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 9 seconds
- 2026-05-20
  - FAIL 8 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2471431Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T01:51:33.2472349Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-05-20T01:51:33.2483154Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T01:51:33.2578305Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T01:51:33.2579077Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2579562Z         
2026-05-20T01:51:33.2580061Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2580504Z         
2026-05-20T01:51:33.2581237Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2582098Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2582740Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2583436Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2584249Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2585064Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2585692Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2586311Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2587017Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2587683Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2588408Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2589197Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2591580Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2593021Z         
2026-05-20T01:51:33.2593652Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2594200Z         issue tracker.
2026-05-20T01:51:33.2609281Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/f96c1362-7f51-49a2-93f4-70cd42dc4dbf/terraform
2026-05-20T01:51:33.2693469Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (8.12s)
```

  - FAIL 6 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2624394Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T13:17:06.2625086Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-05-20T13:17:06.2633915Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T13:17:06.2747723Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-20T13:17:06.2748733Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2749382Z         
2026-05-20T13:17:06.2750039Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2750614Z         
2026-05-20T13:17:06.2751586Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2752696Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2753503Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2754382Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2755409Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2756395Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2757197Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2758007Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2758902Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2759792Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2760751Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2761917Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2764792Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2766444Z         
2026-05-20T13:17:06.2767243Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2767961Z         issue tracker.
2026-05-20T13:17:06.2788990Z   
2026-05-20T13:17:06.2883601Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (6.41s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6389285Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-21T01:56:32.6389977Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-05-21T01:56:32.6392741Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-21T01:56:32.6463434Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-21T01:56:32.6464094Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6464687Z         
2026-05-21T01:56:32.6465211Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6465649Z         
2026-05-21T01:56:32.6466196Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6466937Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6467501Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6468089Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6468770Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6469466Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6470041Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6470586Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6471156Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6471702Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6472312Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6472978Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6474860Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6476091Z         
2026-05-21T01:56:32.6476614Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6477093Z         issue tracker.
2026-05-21T01:56:32.6491564Z    test_terraform_path=/home/runner/work/_temp/277302f5-8cc5-47c6-894d-c47ed5af024c/terraform test_step_number=2 test_working_directory=/tmp/plugintest1525356290
2026-05-21T01:56:32.6569689Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (8.27s)
```

- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS 9 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 9 seconds
- 2026-05-27 PASS 7 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5438679Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-28T02:40:17.5439399Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-05-28T02:40:17.5440141Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-8575567807965612296
2026-05-28T02:40:17.5440628Z     resource_test.go:237: 
2026-05-28T02:40:17.5441538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5443343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5445327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5447127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5449251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5451337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5452144Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5454948Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5456496Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-05-28T02:40:17.5459304Z         	Messages:   	Project creation failed: test-acc-tf-p-8575567807965612296, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5486335Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.89s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30 PASS 6 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02 PASS 41 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 7 seconds
- 2026-06-05 PASS 5 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
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
- 2026-05-26 PASS 9 seconds
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

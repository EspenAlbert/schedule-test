# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 8.07s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 7.08s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 10.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 10 seconds
- 2026-05-09
  - PASS 9 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1387385Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-09T01:47:38.1388413Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-05-09T01:47:38.1389355Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-7066980500411165008
2026-05-09T01:47:38.1389963Z     resource_test.go:237: 
2026-05-09T01:47:38.1391087Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1393490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1395828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1398055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1400232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1402828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1403777Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1406078Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1407496Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-09T01:47:38.1409746Z         	Messages:   	Project creation failed: test-acc-tf-p-7066980500411165008, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1455524Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (62.79s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 10 seconds
- 2026-05-14 PASS 10 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 2 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 10 seconds
- 2026-05-20
  - FAIL 8 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2478604Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T01:51:33.2479587Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-05-20T01:51:33.2482499Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T01:51:33.2610365Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T01:51:33.2611241Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-20T01:51:33.2611715Z         
2026-05-20T01:51:33.2612222Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2612653Z         
2026-05-20T01:51:33.2613256Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2614120Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2614755Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2615433Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2616228Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2617002Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2617626Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2618294Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2618990Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2619661Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2620392Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2621429Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2623722Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2624998Z         
2026-05-20T01:51:33.2625619Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2626167Z         issue tracker.
2026-05-20T01:51:33.2642170Z   
2026-05-20T01:51:33.2694321Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (8.71s)
```

  - FAIL 7 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2630170Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T13:17:06.2630935Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-05-20T13:17:06.2633378Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T13:17:06.2830868Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-20T13:17:06.2832003Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-20T13:17:06.2832627Z         
2026-05-20T13:17:06.2833272Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2833840Z         
2026-05-20T13:17:06.2834633Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2835721Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2836530Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2837428Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2838448Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2839438Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2840231Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2841039Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2842257Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2843105Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2844038Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2845065Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2847926Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2849549Z         
2026-05-20T13:17:06.2850338Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2851068Z         issue tracker.
2026-05-20T13:17:06.2867710Z    test_step_number=3 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T13:17:06.2885615Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (7.83s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6368425Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-21T01:56:32.6369262Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-05-21T01:56:32.6392200Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-21T01:56:32.6521774Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-21T01:56:32.6522481Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-21T01:56:32.6522941Z         
2026-05-21T01:56:32.6523406Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6523868Z         
2026-05-21T01:56:32.6524448Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6525383Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6525985Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6526633Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6527723Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6528406Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6529014Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6529631Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6530290Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6530904Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6531619Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6532354Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6534148Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6535371Z         
2026-05-21T01:56:32.6536168Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6536699Z         issue tracker.
2026-05-21T01:56:32.6551591Z   
2026-05-21T01:56:32.6571228Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.31s)
```

- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 10 seconds
- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5367696Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-28T02:40:17.5368840Z     resource_test.go:236: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2026-05-28T02:40:17.5369656Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-7395460999112652367
2026-05-28T02:40:17.5370304Z     resource_test.go:237: 
2026-05-28T02:40:17.5371363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5373501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5375459Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5377675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5379924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5382167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5383129Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5386502Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5388422Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-05-28T02:40:17.5391275Z         	Messages:   	Project creation failed: test-acc-tf-p-7395460999112652367, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5484306Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.03s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30 PASS 7 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 10 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 7 seconds

## QA Environment
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
- 2026-05-17 PASS 9 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25 PASS 11 seconds
- 2026-05-26 PASS 10 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

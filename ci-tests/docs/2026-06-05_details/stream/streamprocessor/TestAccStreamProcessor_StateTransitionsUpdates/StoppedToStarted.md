# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.01s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 11.04s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 8.06s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 11.02s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 11 seconds
  - PASS 10 seconds
- 2026-05-08 PASS 10 seconds
- 2026-05-09
  - PASS 9 seconds
  - FAIL 2 minutes

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1363818Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-09T01:47:38.1364671Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-05-09T01:47:38.1365627Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-8825231019067403382
2026-05-09T01:47:38.1366185Z     resource_test.go:237: 
2026-05-09T01:47:38.1367247Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1369450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1371621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1373913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1376222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1378780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1379711Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1382140Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1383601Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-09T01:47:38.1385857Z         	Messages:   	Project creation failed: test-acc-tf-p-8825231019067403382, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1454819Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (120.06s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 10 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 11 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 12 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 36 seconds
- 2026-05-19 PASS 12 seconds
- 2026-05-20
  - FAIL 11 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2476341Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T01:51:33.2477171Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-05-20T01:51:33.2483814Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T01:51:33.2642588Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T01:51:33.2643346Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-20T01:51:33.2643872Z         
2026-05-20T01:51:33.2644361Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2644806Z         
2026-05-20T01:51:33.2645432Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2646281Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2646910Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2647599Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2648426Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2649205Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2649960Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2650589Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2651408Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2652087Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2652821Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2653636Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2655937Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2657236Z         
2026-05-20T01:51:33.2657850Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2658398Z         issue tracker.
2026-05-20T01:51:33.2673896Z    test_terraform_path=/home/runner/work/_temp/f96c1362-7f51-49a2-93f4-70cd42dc4dbf/terraform
2026-05-20T01:51:33.2695179Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.42s)
```

  - FAIL 8 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2628337Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T13:17:06.2629029Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-05-20T13:17:06.2634978Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T13:17:06.2648838Z   
2026-05-20T13:17:06.2868350Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-20T13:17:06.2868972Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-20T13:17:06.2869377Z         
2026-05-20T13:17:06.2869801Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2870174Z         
2026-05-20T13:17:06.2870672Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2871625Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2872162Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2872903Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2873565Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2874213Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2874750Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2875281Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2875873Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2876438Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2877037Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2877696Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2879583Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2880635Z         
2026-05-20T13:17:06.2881146Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2881877Z         issue tracker.
2026-05-20T13:17:06.2886279Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (8.61s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6366383Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-21T01:56:32.6367175Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-05-21T01:56:32.6393782Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-21T01:56:32.6407320Z   
2026-05-21T01:56:32.6552042Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-21T01:56:32.6552871Z     resource_test.go:237: Step 3/3 error: Error running apply: exit status 1
2026-05-21T01:56:32.6553651Z         
2026-05-21T01:56:32.6554133Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6554692Z         
2026-05-21T01:56:32.6555258Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6556053Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6556647Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6557277Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6558004Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6558666Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6559240Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6559845Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6560468Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6561137Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6561845Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6562796Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6564840Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6565928Z         
2026-05-21T01:56:32.6566496Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6567020Z         issue tracker.
2026-05-21T01:56:32.6572004Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.18s)
```

- 2026-05-22 PASS 10 seconds
- 2026-05-23 PASS 11 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 10 seconds
- 2026-05-26 PASS 11 seconds
- 2026-05-27 PASS 10 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5342522Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-28T02:40:17.5343415Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-05-28T02:40:17.5344310Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-1703308592163012543
2026-05-28T02:40:17.5344809Z     resource_test.go:237: 
2026-05-28T02:40:17.5345904Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5348200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5350287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5352394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5354538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5356738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5357793Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5361106Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5362936Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-05-28T02:40:17.5365671Z         	Messages:   	Project creation failed: test-acc-tf-p-1703308592163012543, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5483616Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.75s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30 PASS 9 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02 PASS 12 seconds
- 2026-06-03 PASS 10 seconds
- 2026-06-04 PASS 10 seconds
- 2026-06-05 PASS 8 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 10 seconds
- 2026-05-25 PASS a minute
- 2026-05-26 PASS a minute
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

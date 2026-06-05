# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 130.05s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 7.02s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 9.02s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09
  - PASS 8 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1340156Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-09T01:47:38.1341175Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-05-09T01:47:38.1342303Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-4000193497281408015
2026-05-09T01:47:38.1342820Z     resource_test.go:237: 
2026-05-09T01:47:38.1343903Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1345864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1347844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1349996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1352640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1355043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1356061Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1358384Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1359808Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-09T01:47:38.1362208Z         	Messages:   	Project creation failed: test-acc-tf-p-4000193497281408015, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1453941Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (63.31s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 10 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16 PASS 11 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19 PASS 10 seconds
- 2026-05-20
  - FAIL 2 minutes

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2473784Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T01:51:33.2474765Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-05-20T01:51:33.2481850Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T01:51:33.2674637Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T01:51:33.2675384Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2675884Z         
2026-05-20T01:51:33.2676392Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2676822Z         
2026-05-20T01:51:33.2677426Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2678444Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2679071Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2679755Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2680555Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2681456Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2682064Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2682683Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2683374Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2684035Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2684755Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2685543Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2687962Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2689267Z         
2026-05-20T01:51:33.2689863Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2690424Z         issue tracker.
2026-05-20T01:51:33.2696041Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (130.46s)
```

  - FAIL 7 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2626218Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T13:17:06.2627003Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-05-20T13:17:06.2632853Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T13:17:06.2789549Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-20T13:17:06.2790511Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2791138Z         
2026-05-20T13:17:06.2792009Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2792588Z         
2026-05-20T13:17:06.2793367Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2794478Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2795320Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2796189Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2797217Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2798221Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2799023Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2799832Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2800742Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2801755Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2802689Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2803684Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2806500Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2808306Z         
2026-05-20T13:17:06.2809094Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2809818Z         issue tracker.
2026-05-20T13:17:06.2829202Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/d3faa110-429b-48fd-9e23-098e03233739/terraform test_working_directory=/tmp/plugintest3163867285
2026-05-20T13:17:06.2884938Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (7.22s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6364010Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-21T01:56:32.6364985Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-05-21T01:56:32.6391115Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-21T01:56:32.6492427Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-21T01:56:32.6493064Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6493504Z         
2026-05-21T01:56:32.6493943Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6494384Z         
2026-05-21T01:56:32.6495121Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6495869Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6496450Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6497078Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6497798Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6498475Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6499055Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6499647Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6500284Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6501109Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6501829Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6502563Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6504347Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6505545Z         
2026-05-21T01:56:32.6506207Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6506728Z         issue tracker.
2026-05-21T01:56:32.6521409Z   
2026-05-21T01:56:32.6570442Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (9.22s)
```

- 2026-05-22 PASS a minute
- 2026-05-23 PASS 10 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 11 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5460941Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-28T02:40:17.5461741Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-05-28T02:40:17.5462545Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-8404596278488831510
2026-05-28T02:40:17.5463039Z     resource_test.go:237: 
2026-05-28T02:40:17.5463947Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5465751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5467776Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5469591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5471482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5473417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5474219Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5477025Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5478787Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-05-28T02:40:17.5481237Z         	Messages:   	Project creation failed: test-acc-tf-p-8404596278488831510, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5487006Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (1.97s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30 PASS 7 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 10 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

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
- 2026-05-17 PASS 8 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25 PASS 10 seconds
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

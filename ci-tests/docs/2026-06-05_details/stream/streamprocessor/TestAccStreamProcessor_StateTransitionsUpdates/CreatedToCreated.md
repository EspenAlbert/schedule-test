# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 5.09s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 5.05s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 7.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09
  - PASS 5 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1411365Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-09T01:47:38.1412465Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-05-09T01:47:38.1413469Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-9049831355970104514
2026-05-09T01:47:38.1413992Z     resource_test.go:237: 
2026-05-09T01:47:38.1415089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1417102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1419091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1421134Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1423169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1425106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-09T01:47:38.1425940Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1428093Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1429319Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-09T01:47:38.1431193Z         	Messages:   	Project creation failed: test-acc-tf-p-9049831355970104514, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1456218Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (68.45s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16 PASS 31 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19 PASS 6 seconds
- 2026-05-20
  - FAIL 5 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2466451Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T01:51:33.2467433Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-05-20T01:51:33.2481194Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T01:51:33.2501015Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T01:51:33.2501921Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2502429Z         
2026-05-20T01:51:33.2503059Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2503512Z         
2026-05-20T01:51:33.2504135Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2505038Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2505684Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2506375Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2507218Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2508029Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2508670Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2509311Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2510042Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2510746Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2523689Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2524512Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2526778Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2528099Z         
2026-05-20T01:51:33.2528722Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2529264Z         issue tracker.
2026-05-20T01:51:33.2544731Z    test_terraform_path=/home/runner/work/_temp/f96c1362-7f51-49a2-93f4-70cd42dc4dbf/terraform test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-05-20T01:51:33.2691699Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (5.93s)
```

  - FAIL 5 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2620052Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T13:17:06.2621028Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-05-20T13:17:06.2632312Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T13:17:06.2649393Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-20T13:17:06.2650367Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2650998Z         
2026-05-20T13:17:06.2651820Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2652408Z         
2026-05-20T13:17:06.2653384Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2654487Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2655280Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2656138Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2657179Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2658195Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2659007Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2659813Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2660707Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2661722Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2662650Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2663649Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2666514Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2668164Z         
2026-05-20T13:17:06.2668947Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2669669Z         issue tracker.
2026-05-20T13:17:06.2689347Z    test_working_directory=/tmp/plugintest277432050 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/d3faa110-429b-48fd-9e23-098e03233739/terraform
2026-05-20T13:17:06.2882905Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (5.52s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6385325Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-21T01:56:32.6386179Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-05-21T01:56:32.6391650Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-21T01:56:32.6434398Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-21T01:56:32.6435232Z     resource_test.go:237: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6435702Z         
2026-05-21T01:56:32.6436200Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6436611Z         
2026-05-21T01:56:32.6437209Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6437995Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6438589Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6439207Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6439946Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6440679Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6441231Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6441751Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6442333Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6442911Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6443571Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6444298Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6446313Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6447387Z         
2026-05-21T01:56:32.6447928Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6448492Z         issue tracker.
2026-05-21T01:56:32.6462287Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/277302f5-8cc5-47c6-894d-c47ed5af024c/terraform test_working_directory=/tmp/plugintest3480209607
2026-05-21T01:56:32.6568984Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (7.26s)
```

- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26 PASS 6 seconds
- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5393193Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-28T02:40:17.5394053Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-05-28T02:40:17.5395019Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-4617165353331188841
2026-05-28T02:40:17.5395663Z     resource_test.go:237: 
2026-05-28T02:40:17.5396693Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5398818Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5400791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5402604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5404653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5406596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-05-28T02:40:17.5407593Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5410410Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5412269Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-05-28T02:40:17.5414719Z         	Messages:   	Project creation failed: test-acc-tf-p-4617165353331188841, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5484989Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.24s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30 PASS 4 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5688942Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-06-02T01:54:34.5689715Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-06-02T01:54:34.5690492Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-7754187306932851333
2026-06-02T01:54:34.5690978Z     resource_test.go:237: 
2026-06-02T01:54:34.5691948Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5693805Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5696011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5697905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5699964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-06-02T01:54:34.5701849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-06-02T01:54:34.5702790Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5704952Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5706239Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-06-02T01:54:34.5708080Z         	Messages:   	Project creation failed: test-acc-tf-p-7754187306932851333, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5739387Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (61.97s)
```

- 2026-06-03 PASS 5 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 6 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 4.05s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 3.06s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 4.06s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09
  - PASS 4 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1457891Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-09T01:47:38.1458834Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-05-09T01:47:38.1459739Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-8440588564967563054
2026-05-09T01:47:38.1460247Z     resource_test.go:271: 
2026-05-09T01:47:38.1461177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1463115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1464917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1466723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1469021Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1470975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-05-09T01:47:38.1472126Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1474107Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1475309Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-09T01:47:38.1477178Z         	Messages:   	Project creation failed: test-acc-tf-p-8440588564967563054, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1503644Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (63.45s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 4 seconds
- 2026-05-15 PASS 4 seconds
- 2026-05-16 PASS 5 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 5 seconds
- 2026-05-20
  - FAIL 4 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2697237Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T01:51:33.2698396Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-05-20T01:51:33.2705537Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T01:51:33.2723420Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T01:51:33.2724177Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2724653Z         
2026-05-20T01:51:33.2725156Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2725583Z         
2026-05-20T01:51:33.2726179Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2727015Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2727636Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2728335Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2729135Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2729913Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2730522Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2731279Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2731980Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2732644Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2733361Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2734146Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2736405Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2737883Z         
2026-05-20T01:51:33.2738488Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2739013Z         issue tracker.
2026-05-20T01:51:33.2753940Z    test_step_number=2 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/f96c1362-7f51-49a2-93f4-70cd42dc4dbf/terraform
2026-05-20T01:51:33.2803796Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (4.54s)
```

  - FAIL 3 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2887260Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T13:17:06.2888197Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-05-20T13:17:06.2893912Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T13:17:06.2908806Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-20T13:17:06.2909414Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2909813Z         
2026-05-20T13:17:06.2910230Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2910596Z         
2026-05-20T13:17:06.2911093Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2911999Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2912529Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2913080Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2913732Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2914360Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2914882Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2915400Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2915985Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2916540Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2917139Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2917780Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2919549Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2920783Z         
2026-05-20T13:17:06.2921474Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2922193Z         issue tracker.
2026-05-20T13:17:06.2936959Z   
2026-05-20T13:17:06.2978012Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (3.58s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6573186Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-21T01:56:32.6574243Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-05-21T01:56:32.6580845Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-21T01:56:32.6599834Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-21T01:56:32.6600514Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6601004Z         
2026-05-21T01:56:32.6601485Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6601990Z         
2026-05-21T01:56:32.6602583Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6603323Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6603962Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6604836Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6605639Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6606388Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6607037Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6607677Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6608362Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6609002Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6609712Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6611150Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6613420Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6614780Z         
2026-05-21T01:56:32.6615356Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6615911Z         issue tracker.
2026-05-21T01:56:32.6631110Z   
2026-05-21T01:56:32.6676264Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (4.61s)
```

- 2026-05-22 PASS 4 seconds
- 2026-05-23 PASS 4 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 4 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5510634Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-28T02:40:17.5511555Z     resource_test.go:270: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2026-05-28T02:40:17.5512464Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-4676647963218797151
2026-05-28T02:40:17.5512966Z     resource_test.go:271: 
2026-05-28T02:40:17.5513881Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5515838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5517881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5519699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5521595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5523531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-05-28T02:40:17.5524347Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5527158Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5529048Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2026-05-28T02:40:17.5531493Z         	Messages:   	Project creation failed: test-acc-tf-p-4676647963218797151, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5556689Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (1.61s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30 PASS 4 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
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
- 2026-05-24 PASS 4 seconds
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 5 seconds
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

# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.06s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev |  | 8.01s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev |  | 6.00s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev |  | 7.09s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09
  - PASS 6 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1478445Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-09T01:47:38.1479387Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-05-09T01:47:38.1480304Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-5350443581241495763
2026-05-09T01:47:38.1480814Z     resource_test.go:271: 
2026-05-09T01:47:38.1481738Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1483707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1485517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1487330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1489267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-09T01:47:38.1491343Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-05-09T01:47:38.1492308Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1494245Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1495425Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-09T01:47:38.1497282Z         	Messages:   	Project creation failed: test-acc-tf-p-5350443581241495763, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1504336Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (89.64s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 8 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 8 seconds
- 2026-05-20
  - FAIL 8 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2700025Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T01:51:33.2701278Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-05-20T01:51:33.2706817Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T01:51:33.2722161Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState test_terraform_path=/home/runner/work/_temp/f96c1362-7f51-49a2-93f4-70cd42dc4dbf/terraform test_working_directory=/tmp/plugintest90694147
2026-05-20T01:51:33.2755072Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T01:51:33.2755803Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2756282Z         
2026-05-20T01:51:33.2756784Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2757230Z         
2026-05-20T01:51:33.2757832Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2758702Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2759343Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2760034Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2760839Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2761731Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2762350Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2762956Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2763781Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2764393Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2765105Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2765889Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2768149Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2769423Z         
2026-05-20T01:51:33.2770032Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2770571Z         issue tracker.
2026-05-20T01:51:33.2786471Z   
2026-05-20T01:51:33.2804614Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (8.06s)
```

  - FAIL 6 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2889471Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T13:17:06.2890352Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-05-20T13:17:06.2894906Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T13:17:06.2908458Z   
2026-05-20T13:17:06.2937304Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-20T13:17:06.2937919Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-20T13:17:06.2938323Z         
2026-05-20T13:17:06.2938749Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2939119Z         
2026-05-20T13:17:06.2939622Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2940318Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2940834Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2941615Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2942283Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2942916Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2943424Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2943947Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2944524Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2945074Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2945667Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2946461Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2948244Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2949275Z         
2026-05-20T13:17:06.2949776Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2950239Z         issue tracker.
2026-05-20T13:17:06.2963519Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T13:17:06.2978670Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (6.03s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6575921Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-21T01:56:32.6576931Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-05-21T01:56:32.6582862Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-21T01:56:32.6599410Z   
2026-05-21T01:56:32.6631522Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-21T01:56:32.6632249Z     resource_test.go:271: Step 2/2 error: Error running apply: exit status 1
2026-05-21T01:56:32.6632734Z         
2026-05-21T01:56:32.6633232Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6633673Z         
2026-05-21T01:56:32.6634210Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6635108Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6635710Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6636277Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6636956Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6637637Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6638460Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6639040Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6639686Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6640322Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6640954Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6641642Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6643430Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6644633Z         
2026-05-21T01:56:32.6645212Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6645699Z         issue tracker.
2026-05-21T01:56:32.6660656Z   
2026-05-21T01:56:32.6676945Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (7.95s)
```

- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5533113Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-28T02:40:17.5534038Z     resource_test.go:270: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2026-05-28T02:40:17.5534947Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-1046508535087610403
2026-05-28T02:40:17.5535442Z     resource_test.go:271: 
2026-05-28T02:40:17.5536360Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5538391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5540198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5542002Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5543907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5545835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-05-28T02:40:17.5546646Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5549658Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5551239Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2026-05-28T02:40:17.5553836Z         	Messages:   	Project creation failed: test-acc-tf-p-1046508535087610403, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5557346Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (1.85s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30 PASS 7 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 9 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
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
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

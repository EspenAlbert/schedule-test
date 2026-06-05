# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev | 8.05s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev | 6.04s
[2026-05-21 01:56](#error-2026-05-21t0156320000) |  | dev | 8.09s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09
  - PASS 6 seconds
  - PASS 34 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 9 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 8 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 7 seconds
- 2026-05-19 PASS 9 seconds
- 2026-05-20
  - FAIL 8 seconds

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2702831Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T01:51:33.2703938Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-05-20T01:51:33.2706179Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T01:51:33.2786880Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T01:51:33.2787620Z     resource_test.go:271: Step 3/3 error: Error running apply: exit status 1
2026-05-20T01:51:33.2788097Z         
2026-05-20T01:51:33.2788593Z         Error: Provider produced inconsistent result after apply
2026-05-20T01:51:33.2789021Z         
2026-05-20T01:51:33.2789633Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T01:51:33.2790481Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T01:51:33.2791213Z         unexpected new value: .pipeline: was
2026-05-20T01:51:33.2791897Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T01:51:33.2792854Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T01:51:33.2793621Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T01:51:33.2794240Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T01:51:33.2794874Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T01:51:33.2795564Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T01:51:33.2796220Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T01:51:33.2796936Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T01:51:33.2797712Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T01:51:33.2799956Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T01:51:33.2801378Z         
2026-05-20T01:51:33.2801993Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T01:51:33.2802668Z         issue tracker.
2026-05-20T01:51:33.2805423Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (8.51s)
```

  - FAIL 6 seconds

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2891769Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T13:17:06.2892662Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-05-20T13:17:06.2894414Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T13:17:06.2964081Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-20T13:17:06.2964693Z     resource_test.go:271: Step 3/3 error: Error running apply: exit status 1
2026-05-20T13:17:06.2965109Z         
2026-05-20T13:17:06.2965538Z         Error: Provider produced inconsistent result after apply
2026-05-20T13:17:06.2965907Z         
2026-05-20T13:17:06.2966410Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-20T13:17:06.2967113Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-20T13:17:06.2967631Z         unexpected new value: .pipeline: was
2026-05-20T13:17:06.2968186Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-20T13:17:06.2968833Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-20T13:17:06.2969464Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-20T13:17:06.2970128Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-20T13:17:06.2970652Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-20T13:17:06.2971355Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-20T13:17:06.2971914Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-20T13:17:06.2972525Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-20T13:17:06.2973168Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-20T13:17:06.2974933Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-20T13:17:06.2975962Z         
2026-05-20T13:17:06.2976464Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-20T13:17:06.2976922Z         issue tracker.
2026-05-20T13:17:06.2979312Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (6.43s)
```

- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6578438Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-21T01:56:32.6579409Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-05-21T01:56:32.6582061Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-21T01:56:32.6661105Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-21T01:56:32.6661750Z     resource_test.go:271: Step 3/3 error: Error running apply: exit status 1
2026-05-21T01:56:32.6662157Z         
2026-05-21T01:56:32.6662591Z         Error: Provider produced inconsistent result after apply
2026-05-21T01:56:32.6663042Z         
2026-05-21T01:56:32.6663585Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2026-05-21T01:56:32.6664770Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-21T01:56:32.6665339Z         unexpected new value: .pipeline: was
2026-05-21T01:56:32.6665944Z         cty.StringVal("[\n\t\t{\n\t\t\t\"$source\": {\n\t\t\t\t\"connectionName\":
2026-05-21T01:56:32.6666633Z         \"sample_stream_solar\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$tumblingWindow\":
2026-05-21T01:56:32.6667314Z         {\n\t\t\t\t\"interval\": { \n\t\t\t\t\t\"size\": 10, \n\t\t\t\t\t\"unit\":
2026-05-21T01:56:32.6667867Z         \"second\" \n\t\t\t\t},\n\t\t\t\t\"pipeline\":
2026-05-21T01:56:32.6668428Z         [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"$group\": {\n\t\t\t\t\t\t\t\"_id\":
2026-05-21T01:56:32.6669019Z         \"$group_id\",\n\t\t\t\t\t\t\t\"max_temp\": { \"$avg\": \"$obs.temp\"
2026-05-21T01:56:32.6669614Z         },\n\t\t\t\t\t\t\t\"avg_watts\": { \"$min\": \"$obs.watts\"
2026-05-21T01:56:32.6670257Z         }\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"$emit\":
2026-05-21T01:56:32.6670980Z         {\n\t\t\t\t\"connectionName\": \"__testLog\"\n\t\t\t}\n\t\t}\n\t]"), but now
2026-05-21T01:56:32.6673048Z         cty.StringVal("[{\"$source\":{\"connectionName\":\"sample_stream_solar\"}},{\"$tumblingWindow\":{\"interval\":{\"size\":10.0,\"unit\":\"second\"},\"pipeline\":[{\"$group\":{\"_id\":\"$group_id\",\"avg_watts\":{\"$min\":\"$obs.watts\"},\"max_temp\":{\"$avg\":\"$obs.temp\"}}}]}},{\"$emit\":{\"connectionName\":\"__testLog\"}}]").
2026-05-21T01:56:32.6674083Z         
2026-05-21T01:56:32.6674759Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-21T01:56:32.6675295Z         issue tracker.
2026-05-21T01:56:32.6677699Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (8.86s)
```

- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS 7 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 9 seconds
- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5488180Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-28T02:40:17.5489107Z     resource_test.go:270: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2026-05-28T02:40:17.5490013Z     resource_test.go:271: Creating execution project (1): test-acc-tf-p-5970969539379987014
2026-05-28T02:40:17.5490501Z     resource_test.go:271: 
2026-05-28T02:40:17.5491538Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5493353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5495156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5496969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5499079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5501020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:271
2026-05-28T02:40:17.5501827Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5504833Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5506372Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2026-05-28T02:40:17.5509016Z         	Messages:   	Project creation failed: test-acc-tf-p-5970969539379987014, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5556015Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (1.94s)
```

- 2026-05-29 PASS 10 seconds
- 2026-05-30 PASS 7 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 7 seconds
- 2026-06-02 PASS 10 seconds
- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 6 seconds

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
- 2026-05-25 PASS 10 seconds
- 2026-05-26 PASS 8 seconds
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

# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 111.03s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 117.04s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2911632Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-09T01:36:44.2912437Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-4337192818261591516
2026-07-09T01:36:44.2913088Z     resource_test.go:93: 
2026-07-09T01:36:44.2914259Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2916632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2918696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2920609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2922941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-07-09T01:36:44.2924243Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2924842Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2927094Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2928299Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-09T01:36:44.2930503Z         	Messages:   	Project creation failed: test-acc-tf-p-4337192818261591516, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2931850Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (111.29s)
```

- 2026-07-10 PASS 13 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.7894232Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-11T00:54:05.7895416Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-1054430081830848966
2026-07-11T00:54:05.7896551Z     resource_test.go:93: 
2026-07-11T00:54:05.7898244Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.7901742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.7905442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.7909304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.7913137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-07-11T00:54:05.7915553Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.7916715Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.7920474Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7922565Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-11T00:54:05.7926290Z         	Messages:   	Project creation failed: test-acc-tf-p-1054430081830848966, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7928833Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (117.39s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS 58 minutes
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 8 minutes
- 2026-07-17 PASS an hour
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8930893Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-18T01:15:30.8931542Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-8823738819294965389
2026-07-18T01:15:30.8932047Z     resource_test.go:93: 
2026-07-18T01:15:30.8932983Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8935067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8936920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8938777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8940735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-07-18T01:15:30.8941982Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8942522Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.8944855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8946010Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-18T01:15:30.8947901Z         	Messages:   	Project creation failed: test-acc-tf-p-8823738819294965389, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8949186Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (62.10s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8204312Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-21T01:42:12.8204966Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-5028651228433452141
2026-07-21T01:42:12.8205486Z     resource_test.go:93: 
2026-07-21T01:42:12.8206452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8208537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8210607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8212511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8214542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-07-21T01:42:12.8215850Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8216411Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8218839Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8220045Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-21T01:42:12.8221990Z         	Messages:   	Project creation failed: test-acc-tf-p-5028651228433452141, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8223330Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (63.88s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8500374Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-23T02:04:19.8501147Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-3480543358581787191
2026-07-23T02:04:19.8501657Z     resource_test.go:93: 
2026-07-23T02:04:19.8502575Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8504363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8506167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8507992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8509881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-07-23T02:04:19.8511322Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8511870Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8514744Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8516186Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-23T02:04:19.8518590Z         	Messages:   	Project creation failed: test-acc-tf-p-3480543358581787191, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8520288Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (0.63s)
```

- 2026-07-24 PASS 30 minutes
- 2026-07-25 PASS 2 hours
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 minutes
- 2026-07-28 PASS 7 minutes
- 2026-07-29 PASS 2 hours
- 2026-07-30 PASS 8 minutes
- 2026-07-31 PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05 PASS 2 hours
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 59 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-29 16:19](#error-2026-07-29t1619030000) |  | qa |  | 3289.01s
[2026-08-02 05:07](#error-2026-08-02t0507430000) |  | qa | timeout | 12154.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS an hour
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS an hour
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 55 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 58 minutes
  - FAIL 54 minutes

### Error 2026-07-29T16:19:03+00:00
```
2026-07-29T16:19:03.7875374Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-29T16:19:03.7881568Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-29T16:19:03.7897402Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-07-29T16:19:03.7898030Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-07-29T16:19:03.7898690Z         
2026-07-29T16:19:03.7899099Z         Error: Error waiting for changes in Update
2026-07-29T16:19:03.7899610Z         
2026-07-29T16:19:03.7900001Z           with mongodbatlas_search_index_api.test,
2026-07-29T16:19:03.7900774Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-07-29T16:19:03.7901480Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-07-29T16:19:03.7901832Z         
2026-07-29T16:19:03.7902334Z         unexpected state 'DELETED', wanted target 'READY, STEADY'. last error:
2026-07-29T16:19:03.7902770Z         %!s(<nil>)
2026-07-29T16:19:03.7912220Z    test_name=TestAccSearchIndexAPI_MappingWithAnalyzersUpdatedToEmptyAnalyzers test_terraform_path=/home/runner/work/_temp/f1a2b43f-0d28-4e45-ab54-bf7d8c25c51b/terraform
2026-07-29T16:19:03.7933899Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (3289.10s)
```

- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02

### Error 2026-08-02T05:07:43+00:00
```
2026-08-02T05:07:43.2210762Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-02T05:07:43.2220205Z === CONT  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-02T05:07:43.2233859Z === NAME  TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-08-02T05:07:43.2234476Z     resource_test.go:96: Step 2/2 error: Error running apply: exit status 1
2026-08-02T05:07:43.2234898Z         
2026-08-02T05:07:43.2235278Z         Error: Error waiting for changes in Update
2026-08-02T05:07:43.2235613Z         
2026-08-02T05:07:43.2235978Z           with mongodbatlas_search_index_api.test,
2026-08-02T05:07:43.2236683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-02T05:07:43.2237527Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-02T05:07:43.2237885Z         
2026-08-02T05:07:43.2238375Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-02T05:07:43.2238865Z         'BUILDING', timeout: 3h0m0s)
2026-08-02T05:07:43.2239309Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (12154.62s)
```

- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

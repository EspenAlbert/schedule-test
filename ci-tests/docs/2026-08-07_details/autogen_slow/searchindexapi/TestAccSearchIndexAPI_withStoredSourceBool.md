# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceBool Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2971735Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-09T01:36:44.2972409Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-4256370795240408984
2026-07-09T01:36:44.2972982Z     resource_test.go:159: 
2026-07-09T01:36:44.2973970Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2976465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2978388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2980289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2982288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-07-09T01:36:44.2983584Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2984176Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2987356Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.2988868Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-07-09T01:36:44.2991317Z         	Messages:   	Project creation failed: test-acc-tf-p-4256370795240408984, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.2992954Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.69s)
```

- 2026-07-10 PASS 17 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.8000666Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-11T00:54:05.8001800Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-6181273312946971183
2026-07-11T00:54:05.8002745Z     resource_test.go:159: 
2026-07-11T00:54:05.8004614Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.8008365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.8012167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.8016072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.8019946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-07-11T00:54:05.8022335Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.8023303Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.8027409Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8029468Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-07-11T00:54:05.8032999Z         	Messages:   	Project creation failed: test-acc-tf-p-6181273312946971183, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.8035353Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (61.97s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS 58 minutes
- 2026-07-15 PASS 52 minutes
- 2026-07-16 PASS 7 minutes
- 2026-07-17 PASS an hour
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8987280Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-18T01:15:30.8987908Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-6468739336174896624
2026-07-18T01:15:30.8988418Z     resource_test.go:159: 
2026-07-18T01:15:30.8989364Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8991223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8993095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8995241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8997215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-07-18T01:15:30.8998483Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8999023Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.9001041Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9002147Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-07-18T01:15:30.9004323Z         	Messages:   	Project creation failed: test-acc-tf-p-6468739336174896624, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.9005618Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (61.42s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8265416Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-21T01:42:12.8266050Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-7156881441252982262
2026-07-21T01:42:12.8266580Z     resource_test.go:159: 
2026-07-21T01:42:12.8267692Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8269638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8271548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8273430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8275403Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-07-21T01:42:12.8276694Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8277260Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8279492Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8280625Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-07-21T01:42:12.8282674Z         	Messages:   	Project creation failed: test-acc-tf-p-7156881441252982262, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8283918Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (64.75s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8575377Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-23T02:04:19.8576120Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-6235222919725015338
2026-07-23T02:04:19.8576712Z     resource_test.go:159: 
2026-07-23T02:04:19.8577800Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8579820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8582090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8584253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8586474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:159
2026-07-23T02:04:19.8587839Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8588643Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8592201Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8593831Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceBool
2026-07-23T02:04:19.8596589Z         	Messages:   	Project creation failed: test-acc-tf-p-6235222919725015338, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8598362Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (0.69s)
```

- 2026-07-24 PASS 30 minutes
- 2026-07-25 PASS an hour
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 minutes
- 2026-07-28 PASS 9 minutes
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 10 minutes
- 2026-07-31 PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS an hour
- 2026-08-04 PASS an hour
- 2026-08-05 PASS an hour
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 59 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-29 16:19](#error-2026-07-29t1619030000) |  | qa |  | 3299.02s
[2026-08-02 05:07](#error-2026-08-02t0507430000) |  | qa | timeout | 14319.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS an hour
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 43 minutes
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
- 2026-07-26 PASS 57 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 50 minutes
  - FAIL 54 minutes

### Error 2026-07-29T16:19:03+00:00
```
2026-07-29T16:19:03.7877991Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-07-29T16:19:03.7883354Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-07-29T16:19:03.7945683Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-07-29T16:19:03.7946257Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-07-29T16:19:03.7946667Z         
2026-07-29T16:19:03.7947036Z         Error: Error waiting for changes in Update
2026-07-29T16:19:03.7947362Z         
2026-07-29T16:19:03.7947745Z           with mongodbatlas_search_index_api.test,
2026-07-29T16:19:03.7948747Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-07-29T16:19:03.7949492Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-07-29T16:19:03.7949849Z         
2026-07-29T16:19:03.7950315Z         unexpected state 'DELETED', wanted target 'READY, STEADY'. last error:
2026-07-29T16:19:03.7950941Z         %!s(<nil>)
2026-07-29T16:19:03.7951285Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (3299.16s)
```

- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02

### Error 2026-08-02T05:07:43+00:00
```
2026-08-02T05:07:43.2214015Z === RUN   TestAccSearchIndexAPI_withStoredSourceBool
2026-08-02T05:07:43.2218705Z === CONT  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-02T05:07:43.2265941Z === NAME  TestAccSearchIndexAPI_withStoredSourceBool
2026-08-02T05:07:43.2266489Z     resource_test.go:162: Step 2/2 error: Error running apply: exit status 1
2026-08-02T05:07:43.2266887Z         
2026-08-02T05:07:43.2267247Z         Error: Error waiting for changes in Update
2026-08-02T05:07:43.2267569Z         
2026-08-02T05:07:43.2267937Z           with mongodbatlas_search_index_api.test,
2026-08-02T05:07:43.2268630Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-02T05:07:43.2269300Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-02T05:07:43.2269830Z         
2026-08-02T05:07:43.2270320Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-02T05:07:43.2270795Z         'BUILDING', timeout: 3h0m0s)
2026-08-02T05:07:43.2271185Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceBool (14319.98s)
```

- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

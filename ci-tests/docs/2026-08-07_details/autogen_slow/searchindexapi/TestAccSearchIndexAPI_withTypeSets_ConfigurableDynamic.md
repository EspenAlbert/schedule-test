# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 25) FAIL(x 7)
Success rate: 78.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.02s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2932440Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-09T01:36:44.2933166Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-3058809489953173735
2026-07-09T01:36:44.2933748Z     resource_test.go:115: 
2026-07-09T01:36:44.2934750Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2937207Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2939112Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2941008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2943169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-07-09T01:36:44.2944468Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2945076Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2947346Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2948553Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-09T01:36:44.2950481Z         	Messages:   	Project creation failed: test-acc-tf-p-3058809489953173735, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2951817Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (62.77s)
```

- 2026-07-10 PASS 21 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.7929792Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-11T00:54:05.7930986Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-726665906335841605
2026-07-11T00:54:05.7931921Z     resource_test.go:115: 
2026-07-11T00:54:05.7933706Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.7937596Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.7941232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.7945081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.7949111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-07-11T00:54:05.7951509Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.7952514Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.7956583Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7958772Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-11T00:54:05.7962241Z         	Messages:   	Project creation failed: test-acc-tf-p-726665906335841605, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7964609Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (62.45s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS an hour
- 2026-07-14 PASS an hour
- 2026-07-15 PASS an hour
- 2026-07-16 PASS 11 minutes
- 2026-07-17 PASS an hour
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8949702Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-18T01:15:30.8950347Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-6578859333525762657
2026-07-18T01:15:30.8951001Z     resource_test.go:115: 
2026-07-18T01:15:30.8951941Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8954050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8955915Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8957778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8959739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-07-18T01:15:30.8961001Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8961536Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.8963755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8964911Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-18T01:15:30.8966907Z         	Messages:   	Project creation failed: test-acc-tf-p-6578859333525762657, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8968244Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (64.13s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8223868Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-21T01:42:12.8224557Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-8554283953128921703
2026-07-21T01:42:12.8225099Z     resource_test.go:115: 
2026-07-21T01:42:12.8226070Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8228130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8230038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8231957Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8233977Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-07-21T01:42:12.8235284Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8235846Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8238106Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8239330Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-21T01:42:12.8241248Z         	Messages:   	Project creation failed: test-acc-tf-p-8554283953128921703, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8243531Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (74.15s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8520811Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-23T02:04:19.8521467Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-2794240739316167609
2026-07-23T02:04:19.8522141Z     resource_test.go:115: 
2026-07-23T02:04:19.8523073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8524878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8534974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8537250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8539444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:115
2026-07-23T02:04:19.8541057Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8541641Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8545040Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8546802Z         	Test:       	TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-23T02:04:19.8549850Z         	Messages:   	Project creation failed: test-acc-tf-p-2794240739316167609, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8551872Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (0.50s)
```

- 2026-07-24 PASS 32 minutes
- 2026-07-25 PASS 2 hours
- 2026-07-26: MISSING
- 2026-07-27 PASS 11 minutes
- 2026-07-28 PASS 10 minutes
- 2026-07-29 PASS 2 hours
- 2026-07-30 PASS 10 minutes
- 2026-07-31 PASS an hour
- 2026-08-01 PASS an hour
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 hours
- 2026-08-04 PASS an hour
- 2026-08-05 PASS 2 hours
- 2026-08-06 PASS an hour
- 2026-08-07 PASS 2 hours

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-29 16:19](#error-2026-07-29t1619030000) |  | qa |  | 3290.06s
[2026-08-02 05:07](#error-2026-08-02t0507430000) |  | qa | timeout | 13718.01s

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
- 2026-07-26 PASS 59 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS an hour
  - FAIL 54 minutes

### Error 2026-07-29T16:19:03+00:00
```
2026-07-29T16:19:03.7876386Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-29T16:19:03.7882445Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-29T16:19:03.7928260Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-07-29T16:19:03.7929109Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-07-29T16:19:03.7929516Z         
2026-07-29T16:19:03.7929877Z         Error: Error waiting for changes in Update
2026-07-29T16:19:03.7930196Z         
2026-07-29T16:19:03.7930544Z           with mongodbatlas_search_index_api.test,
2026-07-29T16:19:03.7931304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-07-29T16:19:03.7932019Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-07-29T16:19:03.7932376Z         
2026-07-29T16:19:03.7933059Z         unexpected state 'DELETED', wanted target 'READY, STEADY'. last error:
2026-07-29T16:19:03.7933515Z         %!s(<nil>)
2026-07-29T16:19:03.7935156Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (3290.62s)
```

- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02

### Error 2026-08-02T05:07:43+00:00
```
2026-08-02T05:07:43.2212122Z === RUN   TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-02T05:07:43.2217360Z === CONT  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-02T05:07:43.2249948Z === NAME  TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic
2026-08-02T05:07:43.2250570Z     resource_test.go:118: Step 2/3 error: Error running apply: exit status 1
2026-08-02T05:07:43.2250970Z         
2026-08-02T05:07:43.2251584Z         Error: Error waiting for changes in Update
2026-08-02T05:07:43.2251943Z         
2026-08-02T05:07:43.2252309Z           with mongodbatlas_search_index_api.test,
2026-08-02T05:07:43.2252998Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_search_index_api" "test":
2026-08-02T05:07:43.2253664Z           12: 		resource "mongodbatlas_search_index_api" "test" {
2026-08-02T05:07:43.2254014Z         
2026-08-02T05:07:43.2254497Z         timeout while waiting for state to become 'READY, STEADY' (last state:
2026-08-02T05:07:43.2254979Z         'BUILDING', timeout: 3h0m0s)
2026-08-02T05:07:43.2255411Z --- FAIL: TestAccSearchIndexAPI_withTypeSets_ConfigurableDynamic (13718.09s)
```

- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

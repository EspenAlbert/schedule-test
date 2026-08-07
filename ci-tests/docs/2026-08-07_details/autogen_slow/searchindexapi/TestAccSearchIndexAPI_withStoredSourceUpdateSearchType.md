# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceUpdateSearchType Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.01s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.3015434Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-09T01:36:44.3016165Z     resource_test.go:199: Creating execution project (1): test-acc-tf-p-4330401993138959674
2026-07-09T01:36:44.3016736Z     resource_test.go:199: 
2026-07-09T01:36:44.3017728Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.3019611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.3021688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.3023583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.3025808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-07-09T01:36:44.3027117Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.3027713Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.3030626Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.3032180Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-09T01:36:44.3034669Z         	Messages:   	Project creation failed: test-acc-tf-p-4330401993138959674, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:36:44.3036719Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (1.14s)
```

- 2026-07-10 PASS 4 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.8076216Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-11T00:54:05.8077421Z     resource_test.go:199: Creating execution project (1): test-acc-tf-p-3870502610273166671
2026-07-11T00:54:05.8078362Z     resource_test.go:199: 
2026-07-11T00:54:05.8080327Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.8083902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.8087767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.8091432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.8095250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-07-11T00:54:05.8097775Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.8098760Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.8104257Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:05.8107317Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-11T00:54:05.8112211Z         	Messages:   	Project creation failed: test-acc-tf-p-3870502610273166671, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:54:05.8115352Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.17s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 26 minutes
- 2026-07-14 PASS 16 minutes
- 2026-07-15 PASS 24 minutes
- 2026-07-16 PASS 5 minutes
- 2026-07-17 PASS 35 minutes
- 2026-07-18 PASS 20 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8306130Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-21T01:42:12.8306801Z     resource_test.go:199: Creating execution project (1): test-acc-tf-p-6513518590571049282
2026-07-21T01:42:12.8307323Z     resource_test.go:199: 
2026-07-21T01:42:12.8308461Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8310361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8312638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8314835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8317087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-07-21T01:42:12.8318764Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8319575Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8323012Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:42:12.8324872Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-21T01:42:12.8328008Z         	Messages:   	Project creation failed: test-acc-tf-p-6513518590571049282, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T01:42:12.8329965Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (1.14s)
```

- 2026-07-22 PASS 16 minutes
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8623197Z === RUN   TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-23T02:04:19.8624000Z     resource_test.go:199: Creating execution project (1): test-acc-tf-p-6918917238306589218
2026-07-23T02:04:19.8624625Z     resource_test.go:199: 
2026-07-23T02:04:19.8625707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8627888Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8630373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8632433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8634694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:199
2026-07-23T02:04:19.8636167Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8636819Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8639939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8641679Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceUpdateSearchType
2026-07-23T02:04:19.8644101Z         	Messages:   	Project creation failed: test-acc-tf-p-6918917238306589218, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8645779Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceUpdateSearchType (0.17s)
```

- 2026-07-24 PASS 22 minutes
- 2026-07-25 PASS 44 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 minutes
- 2026-07-28 PASS 5 minutes
- 2026-07-29 PASS an hour
- 2026-07-30 PASS 5 minutes
- 2026-07-31 PASS 36 minutes
- 2026-08-01 PASS 20 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 29 minutes
- 2026-08-04 PASS 34 minutes
- 2026-08-05 PASS 39 minutes
- 2026-08-06 PASS 18 minutes
- 2026-08-07 PASS 43 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 33 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 17 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 38 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 42 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

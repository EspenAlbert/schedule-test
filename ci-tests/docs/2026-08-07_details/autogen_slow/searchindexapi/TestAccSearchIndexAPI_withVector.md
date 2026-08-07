# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:36](#error-2026-07-09t0136440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.10s
[2026-07-11 00:54](#error-2026-07-11t0054050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.05s
[2026-07-18 01:15](#error-2026-07-18t0115300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.10s
[2026-07-21 01:42](#error-2026-07-21t0142120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.07s
[2026-07-23 02:04](#error-2026-07-23t0204190000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:36:44+00:00
```
2026-07-09T01:36:44.2952347Z === RUN   TestAccSearchIndexAPI_withVector
2026-07-09T01:36:44.2953000Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-5366888132393525032
2026-07-09T01:36:44.2953573Z     resource_test.go:141: 
2026-07-09T01:36:44.2954561Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:36:44.2956656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:36:44.2958718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:36:44.2960609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:36:44.2962600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-07-09T01:36:44.2963891Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:36:44.2964490Z         	Error:      	Received unexpected error:
2026-07-09T01:36:44.2966756Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2968006Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-07-09T01:36:44.2970016Z         	Messages:   	Project creation failed: test-acc-tf-p-5366888132393525032, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:36:44.2971270Z --- FAIL: TestAccSearchIndexAPI_withVector (84.98s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:54:05+00:00
```
2026-07-11T00:54:05.7965467Z === RUN   TestAccSearchIndexAPI_withVector
2026-07-11T00:54:05.7966769Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-3628814079758396251
2026-07-11T00:54:05.7967715Z     resource_test.go:141: 
2026-07-11T00:54:05.7969503Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:05.7973084Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:05.7976942Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:05.7980586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T00:54:05.7984328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-07-11T00:54:05.7986950Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:05.7987965Z         	Error:      	Received unexpected error:
2026-07-11T00:54:05.7991892Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7993909Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-07-11T00:54:05.7997560Z         	Messages:   	Project creation failed: test-acc-tf-p-3628814079758396251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:05.7999928Z --- FAIL: TestAccSearchIndexAPI_withVector (88.54s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 44 minutes
- 2026-07-14 PASS 24 minutes
- 2026-07-15 PASS 20 minutes
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 36 minutes
- 2026-07-18

### Error 2026-07-18T01:15:30+00:00
```
2026-07-18T01:15:30.8968720Z === RUN   TestAccSearchIndexAPI_withVector
2026-07-18T01:15:30.8969315Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-8412649781034611975
2026-07-18T01:15:30.8969831Z     resource_test.go:141: 
2026-07-18T01:15:30.8970782Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:15:30.8972645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:15:30.8974733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:15:30.8976595Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:15:30.8978559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-07-18T01:15:30.8979817Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:15:30.8980354Z         	Error:      	Received unexpected error:
2026-07-18T01:15:30.8982363Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8983657Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-07-18T01:15:30.8985511Z         	Messages:   	Project creation failed: test-acc-tf-p-8412649781034611975, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:15:30.8986729Z --- FAIL: TestAccSearchIndexAPI_withVector (90.96s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T01:42:12+00:00
```
2026-07-21T01:42:12.8244265Z === RUN   TestAccSearchIndexAPI_withVector
2026-07-21T01:42:12.8245250Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-2050787809666993315
2026-07-21T01:42:12.8246117Z     resource_test.go:141: 
2026-07-21T01:42:12.8247976Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T01:42:12.8250635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T01:42:12.8252549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T01:42:12.8254446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T01:42:12.8256444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-07-21T01:42:12.8257940Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T01:42:12.8258515Z         	Error:      	Received unexpected error:
2026-07-21T01:42:12.8260807Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8261934Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-07-21T01:42:12.8263778Z         	Messages:   	Project creation failed: test-acc-tf-p-2050787809666993315, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T01:42:12.8264997Z --- FAIL: TestAccSearchIndexAPI_withVector (80.74s)
```

- 2026-07-22 PASS 4 minutes
- 2026-07-23

### Error 2026-07-23T02:04:19+00:00
```
2026-07-23T02:04:19.8552447Z === RUN   TestAccSearchIndexAPI_withVector
2026-07-23T02:04:19.8553127Z     resource_test.go:141: Creating execution project (1): test-acc-tf-p-5474060101696523640
2026-07-23T02:04:19.8553698Z     resource_test.go:141: 
2026-07-23T02:04:19.8554836Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T02:04:19.8556917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T02:04:19.8559107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T02:04:19.8561347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T02:04:19.8563621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-07-23T02:04:19.8565025Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T02:04:19.8565653Z         	Error:      	Received unexpected error:
2026-07-23T02:04:19.8569018Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8570811Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-07-23T02:04:19.8573180Z         	Messages:   	Project creation failed: test-acc-tf-p-5474060101696523640, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T02:04:19.8574857Z --- FAIL: TestAccSearchIndexAPI_withVector (0.24s)
```

- 2026-07-24 PASS 11 minutes
- 2026-07-25 PASS 2 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 48 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 27 minutes
- 2026-08-01 PASS 21 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 minutes
- 2026-08-04 PASS 50 minutes
- 2026-08-05 PASS 19 minutes
- 2026-08-06 PASS 39 minutes
- 2026-08-07 PASS 40 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 39 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 31 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 34 minutes
  - PASS 11 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 58 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

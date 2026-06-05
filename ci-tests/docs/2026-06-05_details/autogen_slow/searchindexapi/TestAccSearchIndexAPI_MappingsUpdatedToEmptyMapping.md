# autogen_slow/searchindexapi/TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.00s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 17 minutes
  - PASS 7 minutes
- 2026-05-08 PASS 52 minutes
- 2026-05-09 PASS 26 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 48 minutes
- 2026-05-12 PASS 42 minutes
- 2026-05-13 PASS 42 minutes
- 2026-05-14 PASS 17 minutes
- 2026-05-15 PASS 43 minutes
- 2026-05-16 PASS 27 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 17 minutes
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.3010245Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-19T01:43:06.3010723Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-3844953620657167595
2026-05-19T01:43:06.3011100Z     resource_test.go:93: 
2026-05-19T01:43:06.3011794Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.3013152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.3014867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.3016315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:43:06.3017749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-05-19T01:43:06.3018805Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:43:06.3019210Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.3020697Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3021535Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-19T01:43:06.3022904Z         	Messages:   	Project creation failed: test-acc-tf-p-3844953620657167595, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.3023831Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (74.32s)
```

- 2026-05-20 PASS 33 minutes
- 2026-05-21 PASS 37 minutes
- 2026-05-22 PASS 33 minutes
- 2026-05-23 PASS 45 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 26 minutes
- 2026-05-26 PASS 45 minutes
- 2026-05-27 PASS 6 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2495790Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-28T02:20:31.2496390Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-816038264416735131
2026-05-28T02:20:31.2496847Z     resource_test.go:93: 
2026-05-28T02:20:31.2497727Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2499450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2501175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2503079Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2504907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-05-28T02:20:31.2506070Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2506575Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2509442Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2510831Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-28T02:20:31.2513352Z         	Messages:   	Project creation failed: test-acc-tf-p-816038264416735131, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:20:31.2514841Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (2.01s)
```

- 2026-05-29 PASS 30 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9126990Z === RUN   TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-30T01:46:34.9127636Z     resource_test.go:93: Creating execution project (1): test-acc-tf-p-3546710053696303356
2026-05-30T01:46:34.9128145Z     resource_test.go:93: 
2026-05-30T01:46:34.9129081Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9131040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9132851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9134643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9136521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:93
2026-05-30T01:46:34.9137741Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9138472Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9140729Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9141845Z         	Test:       	TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping
2026-05-30T01:46:34.9143651Z         	Messages:   	Project creation failed: test-acc-tf-p-3546710053696303356, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9144852Z --- FAIL: TestAccSearchIndexAPI_MappingsUpdatedToEmptyMapping (95.24s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 21 minutes
- 2026-06-02 PASS 29 minutes
- 2026-06-03 PASS 28 minutes
- 2026-06-04 PASS 21 minutes
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 22 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 35 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 23 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 35 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

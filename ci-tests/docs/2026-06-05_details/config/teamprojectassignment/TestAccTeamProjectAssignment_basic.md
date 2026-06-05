# config/teamprojectassignment/TestAccTeamProjectAssignment_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.08s
[2026-05-23 01:05](#error-2026-05-23t0105370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.05s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-05-30 01:08](#error-2026-05-30t0108510000) |  | dev | flaky_500 | 58.07s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 14 seconds
  - PASS 15 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7800762Z === RUN   TestAccTeamProjectAssignment_basic
2026-05-09T01:08:30.7801186Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-8137683842116792643
2026-05-09T01:08:30.7801665Z     resource_test.go:19: 
2026-05-09T01:08:30.7802343Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:08:30.7803800Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:08:30.7805131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:08:30.7806557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-05-09T01:08:30.7808015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-05-09T01:08:30.7808922Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:08:30.7809308Z         	Error:      	Received unexpected error:
2026-05-09T01:08:30.7810750Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7811507Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-05-09T01:08:30.7812901Z         	Messages:   	Project creation failed: test-acc-tf-p-8137683842116792643, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7813842Z --- FAIL: TestAccTeamProjectAssignment_basic (100.78s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 9 seconds
- 2026-05-12 PASS 15 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 8 seconds
- 2026-05-16 PASS 15 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 9 seconds
- 2026-05-21 PASS 32 seconds
- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:05:37+00:00
```
2026-05-23T01:05:37.1834273Z === RUN   TestAccTeamProjectAssignment_basic
2026-05-23T01:05:37.1834956Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-5900635955836366859
2026-05-23T01:05:37.1835544Z     resource_test.go:19: 
2026-05-23T01:05:37.1836699Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:37.1839019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:37.1841449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:37.1843947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-05-23T01:05:37.1846516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-05-23T01:05:37.1848054Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:05:37.1848861Z         	Error:      	Received unexpected error:
2026-05-23T01:05:37.1851467Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1852754Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-05-23T01:05:37.1854996Z         	Messages:   	Project creation failed: test-acc-tf-p-5900635955836366859, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:37.1856479Z --- FAIL: TestAccTeamProjectAssignment_basic (102.51s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5016079Z === RUN   TestAccTeamProjectAssignment_basic
2026-05-28T01:03:18.5016790Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-2509344728956079893
2026-05-28T01:03:18.5017623Z     resource_test.go:19: 
2026-05-28T01:03:18.5018547Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5020338Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5022394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5024318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-05-28T01:03:18.5026299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-05-28T01:03:18.5027521Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5028040Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5031193Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5032667Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-05-28T01:03:18.5035012Z         	Messages:   	Project creation failed: test-acc-tf-p-2509344728956079893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5036564Z --- FAIL: TestAccTeamProjectAssignment_basic (0.45s)
```

- 2026-05-29 PASS 7 seconds
- 2026-05-30

### Error 2026-05-30T01:08:51+00:00
```
2026-05-30T01:08:51.9527278Z === RUN   TestAccTeamProjectAssignment_basic
2026-05-30T01:08:51.9528012Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-7914492279036545138
2026-05-30T01:08:51.9528529Z     resource_test.go:19: 
2026-05-30T01:08:51.9529464Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:51.9531258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:51.9533036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:51.9534939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-05-30T01:08:51.9536888Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-05-30T01:08:51.9538206Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:51.9538909Z         	Error:      	Received unexpected error:
2026-05-30T01:08:51.9539865Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:08:51.9540505Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-05-30T01:08:51.9541591Z         	Messages:   	Project creation failed: test-acc-tf-p-7914492279036545138, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:08:51.9542353Z --- FAIL: TestAccTeamProjectAssignment_basic (58.66s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0440250Z === RUN   TestAccTeamProjectAssignment_basic
2026-06-02T01:16:14.0440720Z     resource_test.go:19: Creating execution project (1): test-acc-tf-p-7800918411598379152
2026-06-02T01:16:14.0441114Z     resource_test.go:19: 
2026-06-02T01:16:14.0441969Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0443368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0444771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0446266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:26
2026-06-02T01:16:14.0447801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/teamprojectassignment/resource_test.go:19
2026-06-02T01:16:14.0448996Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:16:14.0458825Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0460445Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0461275Z         	Test:       	TestAccTeamProjectAssignment_basic
2026-06-02T01:16:14.0462852Z         	Messages:   	Project creation failed: test-acc-tf-p-7800918411598379152, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0463790Z --- FAIL: TestAccTeamProjectAssignment_basic (86.22s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 17 seconds
- 2026-06-05 PASS 7 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

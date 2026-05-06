# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 36 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-04-09 00:38](#error-2026-04-09t0038220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-04-11 00:42](#error-2026-04-11t0042480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-04-14 00:49](#error-2026-04-14t0049330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:49+00:00
```
2026-04-07T00:44:49.5335091Z === RUN   TestAccFlexClusterRS_basic
2026-04-07T00:44:49.5336444Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-7184306915514088950
2026-04-07T00:45:54.3448961Z     resource_test.go:20: 
2026-04-07T00:45:54.3451447Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:45:54.3455171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T00:45:54.3458453Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-07T00:45:54.3460686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-04-07T00:45:54.3462788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-04-07T00:45:54.3464284Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-07T00:45:54.3464837Z         	Error:      	Received unexpected error:
2026-04-07T00:45:54.3466784Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:45:54.3467902Z         	Test:       	TestAccFlexClusterRS_basic
2026-04-07T00:45:54.3469680Z         	Messages:   	Project creation failed: test-acc-tf-p-7184306915514088950, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:45:54.3470881Z --- FAIL: TestAccFlexClusterRS_basic (64.81s)
```

- 2026-04-08 PASS 41 seconds
- 2026-04-09

### Error 2026-04-09T00:38:22+00:00
```
2026-04-09T00:38:22.3957296Z === RUN   TestAccFlexClusterRS_basic
2026-04-09T00:38:22.3958131Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-852583908054647621
2026-04-09T00:39:30.9936793Z     resource_test.go:20: 
2026-04-09T00:39:30.9938941Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:39:30.9943644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:39:30.9947816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:39:30.9951397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-04-09T00:39:30.9953700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-04-09T00:39:30.9954890Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:39:30.9955388Z         	Error:      	Received unexpected error:
2026-04-09T00:39:30.9957292Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:30.9958334Z         	Test:       	TestAccFlexClusterRS_basic
2026-04-09T00:39:30.9960061Z         	Messages:   	Project creation failed: test-acc-tf-p-852583908054647621, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:39:30.9961225Z --- FAIL: TestAccFlexClusterRS_basic (68.60s)
```

- 2026-04-10 PASS a minute
- 2026-04-11

### Error 2026-04-11T00:42:48+00:00
```
2026-04-11T00:42:48.4790797Z === RUN   TestAccFlexClusterRS_basic
2026-04-11T00:42:48.4791927Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-3021292798052097255
2026-04-11T00:43:50.1061867Z     resource_test.go:20: 
2026-04-11T00:43:50.1063971Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:43:50.1068027Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:43:50.1072045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:43:50.1076471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-04-11T00:43:50.1079189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-04-11T00:43:50.1080477Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:43:50.1081060Z         	Error:      	Received unexpected error:
2026-04-11T00:43:50.1083090Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:50.1084547Z         	Test:       	TestAccFlexClusterRS_basic
2026-04-11T00:43:50.1086386Z         	Messages:   	Project creation failed: test-acc-tf-p-3021292798052097255, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:43:50.1088710Z --- FAIL: TestAccFlexClusterRS_basic (61.63s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 44 seconds
- 2026-04-14

### Error 2026-04-14T00:49:33+00:00
```
2026-04-14T00:49:33.7269887Z === RUN   TestAccFlexClusterRS_basic
2026-04-14T00:49:33.7272474Z     resource_test.go:20: Creating execution project (1): test-acc-tf-p-6398730961541637076
2026-04-14T00:50:36.0730625Z     resource_test.go:20: 
2026-04-14T00:50:36.0732715Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:50:36.0736820Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:50:36.0740446Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:50:36.0743349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:87
2026-04-14T00:50:36.0747059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:20
2026-04-14T00:50:36.0748608Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-14T00:50:36.0749140Z         	Error:      	Received unexpected error:
2026-04-14T00:50:36.0751459Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:36.0753360Z         	Test:       	TestAccFlexClusterRS_basic
2026-04-14T00:50:36.0755331Z         	Messages:   	Project creation failed: test-acc-tf-p-6398730961541637076, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:50:36.0756498Z --- FAIL: TestAccFlexClusterRS_basic (62.35s)
```

- 2026-04-15 PASS 45 seconds
- 2026-04-16 PASS a minute
- 2026-04-17 PASS 46 seconds
- 2026-04-18 PASS a minute
- 2026-04-19: MISSING
- 2026-04-20 PASS 46 seconds
- 2026-04-21 PASS 2 minutes
- 2026-04-22 PASS 32 minutes
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 48 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 44 seconds
- 2026-04-28 PASS 48 seconds
- 2026-04-29 PASS 43 seconds
- 2026-04-30 PASS 6 minutes
- 2026-05-01 PASS 46 seconds
- 2026-05-02 PASS 53 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 47 seconds
- 2026-05-05 PASS 5 minutes
- 2026-05-06 PASS 47 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04
  - PASS a minute
  - PASS 44 seconds
- 2026-05-05 PASS 46 seconds
- 2026-05-06 PASS a minute

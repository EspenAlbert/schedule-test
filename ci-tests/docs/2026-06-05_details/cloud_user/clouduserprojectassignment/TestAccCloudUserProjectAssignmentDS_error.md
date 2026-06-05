# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignmentDS_error Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-21 01:05](#error-2026-05-21t0105030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s
[2026-05-28 00:59](#error-2026-05-28t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.07s
[2026-05-30 01:02](#error-2026-05-30t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-06-02 01:10](#error-2026-06-02t0110150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a moment
- 2026-05-08 PASS a moment
- 2026-05-09 PASS a moment
- 2026-05-10: MISSING
- 2026-05-11 PASS a moment
- 2026-05-12 PASS a moment
- 2026-05-13 PASS a moment
- 2026-05-14 PASS a moment
- 2026-05-15 PASS a moment
- 2026-05-16 PASS a moment
- 2026-05-17: MISSING
- 2026-05-18 PASS a moment
- 2026-05-19 PASS a moment
- 2026-05-20 PASS a moment
- 2026-05-21

### Error 2026-05-21T01:05:03+00:00
```
2026-05-21T01:05:03.4620302Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-05-21T01:05:03.4621242Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1426254614172610043
2026-05-21T01:05:03.4622182Z     resource_test.go:26: 
2026-05-21T01:05:03.4623348Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:03.4625029Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:03.4626749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:03.4628809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-05-21T01:05:03.4631116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-05-21T01:05:03.4632309Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:05:03.4632915Z         	Error:      	Received unexpected error:
2026-05-21T01:05:03.4634689Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:03.4635744Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-05-21T01:05:03.4637432Z         	Messages:   	Project creation failed: test-acc-tf-p-1426254614172610043, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:03.4638608Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (75.49s)
```

- 2026-05-22 PASS a moment
- 2026-05-23 PASS a moment
- 2026-05-24: MISSING
- 2026-05-25 PASS a moment
- 2026-05-26 PASS a moment
- 2026-05-27 PASS a moment
- 2026-05-28

### Error 2026-05-28T00:59:16+00:00
```
2026-05-28T00:59:16.1703943Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-05-28T00:59:16.1704521Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-172857731143345712
2026-05-28T00:59:16.1704986Z     resource_test.go:26: 
2026-05-28T00:59:16.1705864Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:16.1707628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:16.1709656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:16.1711791Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-05-28T00:59:16.1713834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-05-28T00:59:16.1715065Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:59:16.1715564Z         	Error:      	Received unexpected error:
2026-05-28T00:59:16.1717491Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:16.1719630Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-05-28T00:59:16.1722890Z         	Messages:   	Project creation failed: test-acc-tf-p-172857731143345712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:16.1725092Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (74.66s)
```

- 2026-05-29 PASS a moment
- 2026-05-30

### Error 2026-05-30T01:02:27+00:00
```
2026-05-30T01:02:27.4139633Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-05-30T01:02:27.4140277Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1722830703415028070
2026-05-30T01:02:27.4140787Z     resource_test.go:26: 
2026-05-30T01:02:27.4141712Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:27.4144035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:27.4145845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:27.4148031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-05-30T01:02:27.4150117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-05-30T01:02:27.4151365Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:02:27.4151891Z         	Error:      	Received unexpected error:
2026-05-30T01:02:27.4154146Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:27.4155224Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-05-30T01:02:27.4157056Z         	Messages:   	Project creation failed: test-acc-tf-p-1722830703415028070, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:27.4158245Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (81.44s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS a moment
- 2026-06-02

### Error 2026-06-02T01:10:15+00:00
```
2026-06-02T01:10:15.2861357Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-06-02T01:10:15.2862064Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-3070288119747375556
2026-06-02T01:10:15.2862635Z     resource_test.go:26: 
2026-06-02T01:10:15.2863668Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:10:15.2865712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:10:15.2868026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:10:15.2871824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-06-02T01:10:15.2874188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-06-02T01:10:15.2875610Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:10:15.2876221Z         	Error:      	Received unexpected error:
2026-06-02T01:10:15.2878611Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:15.2879780Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-06-02T01:10:15.2881460Z         	Messages:   	Project creation failed: test-acc-tf-p-3070288119747375556, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:15.2882600Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (78.51s)
```

- 2026-06-03 PASS a moment
- 2026-06-04 PASS a moment
- 2026-06-05 PASS a moment

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS a moment
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS a moment
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS a moment
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS a moment
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

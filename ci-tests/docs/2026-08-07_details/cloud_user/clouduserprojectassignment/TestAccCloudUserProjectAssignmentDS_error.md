# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignmentDS_error Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-11 00:45](#error-2026-07-11t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.04s
[2026-07-21 00:46](#error-2026-07-21t0046590000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-07-23 00:47](#error-2026-07-23t0047150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a moment
- 2026-07-10 PASS a moment
- 2026-07-11

### Error 2026-07-11T00:45:54+00:00
```
2026-07-11T00:45:54.0980358Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-07-11T00:45:54.0981534Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8409847948218258935
2026-07-11T00:45:54.0982409Z     resource_test.go:26: 
2026-07-11T00:45:54.0984063Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:54.0988697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:54.0992104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:54.0996074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-07-11T00:45:54.1000177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-07-11T00:45:54.1002466Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:54.1003385Z         	Error:      	Received unexpected error:
2026-07-11T00:45:54.1006962Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.1009065Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-07-11T00:45:54.1012299Z         	Messages:   	Project creation failed: test-acc-tf-p-8409847948218258935, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.1014414Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (84.44s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a moment
- 2026-07-14 PASS a moment
- 2026-07-15 PASS a moment
- 2026-07-16 PASS a moment
- 2026-07-17 PASS a moment
- 2026-07-18 PASS a moment
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:46:59+00:00
```
2026-07-21T00:46:59.7743819Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-07-21T00:46:59.7744507Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1540401325177249659
2026-07-21T00:46:59.7745346Z     resource_test.go:26: 
2026-07-21T00:46:59.7746338Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:46:59.7748372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:46:59.7750476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:46:59.7752629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-07-21T00:46:59.7754862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-07-21T00:46:59.7756401Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:46:59.7756989Z         	Error:      	Received unexpected error:
2026-07-21T00:46:59.7759044Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:59.7760221Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-07-21T00:46:59.7762126Z         	Messages:   	Project creation failed: test-acc-tf-p-1540401325177249659, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:46:59.7763533Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (65.50s)
```

- 2026-07-22 PASS a moment
- 2026-07-23

### Error 2026-07-23T00:47:15+00:00
```
2026-07-23T00:47:15.0296946Z === RUN   TestAccCloudUserProjectAssignmentDS_error
2026-07-23T00:47:15.0297542Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1390392613707319738
2026-07-23T00:47:15.0298029Z     resource_test.go:26: 
2026-07-23T00:47:15.0298945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:15.0300796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:15.0302807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:15.0304849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:110
2026-07-23T00:47:15.0307856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:26
2026-07-23T00:47:15.0309143Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:47:15.0309676Z         	Error:      	Received unexpected error:
2026-07-23T00:47:15.0311661Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:15.0312761Z         	Test:       	TestAccCloudUserProjectAssignmentDS_error
2026-07-23T00:47:15.0314581Z         	Messages:   	Project creation failed: test-acc-tf-p-1390392613707319738, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:15.0316081Z --- FAIL: TestAccCloudUserProjectAssignmentDS_error (61.34s)
```

- 2026-07-24 PASS a moment
- 2026-07-25 PASS a moment
- 2026-07-26: MISSING
- 2026-07-27 PASS a moment
- 2026-07-28 PASS a moment
- 2026-07-29
  - PASS a moment
  - PASS a moment
- 2026-07-30 PASS a moment
- 2026-07-31 PASS a moment
- 2026-08-01 PASS a moment
- 2026-08-02: MISSING
- 2026-08-03 PASS a moment
- 2026-08-04 PASS a moment
- 2026-08-05 PASS a moment
- 2026-08-06 PASS a moment
- 2026-08-07 PASS a moment

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a moment
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a moment
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a moment
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a moment
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a moment
  - PASS a moment
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a moment
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

# stream/streamaccountdetails/TestAccStreamAccountDetailsDS_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:55](#error-2026-05-07t0055490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.09s
[2026-05-14 01:33](#error-2026-05-14t0133220000) |  | dev | flaky_client | 1986.04s
[2026-05-16 00:55](#error-2026-05-16t0055430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 101.09s
[2026-05-28 00:58](#error-2026-05-28t0058170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T00:55:49+00:00
```
2026-05-07T00:55:49.6771393Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-05-07T00:55:49.6772558Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-660064858140953490
2026-05-07T00:55:49.6773462Z     data_source_test.go:19: 
2026-05-07T00:55:49.6775116Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-07T00:55:49.6778925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-07T00:55:49.6782210Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-07T00:55:49.6785026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-07T00:55:49.6788900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2026-05-07T00:55:49.6791178Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-07T00:55:49.6792175Z         	Error:      	Received unexpected error:
2026-05-07T00:55:49.6795925Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:55:49.6799052Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2026-05-07T00:55:49.6802104Z         	Messages:   	Project creation failed: test-acc-tf-p-660064858140953490, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:55:49.6803874Z --- FAIL: TestAccStreamAccountDetailsDS_basic (69.94s)
```

  - PASS 51 minutes
- 2026-05-08
  - PASS 17 minutes
  - PASS 13 minutes
- 2026-05-09 PASS 23 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 15 minutes
- 2026-05-12 PASS 17 minutes
- 2026-05-13 PASS 16 minutes
- 2026-05-14

### Error 2026-05-14T01:33:22+00:00
```
2026-05-14T01:33:22.2037270Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-05-14T01:33:22.2038384Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-177400555720962913
2026-05-14T01:33:22.2039727Z === CONT  TestAccStreamAccountDetailsDS_basic
2026-05-14T01:33:22.2040659Z     pre_check.go:46: Time before creating cluster: 2026-05-14T00:59:54.90727607Z, ProjectID: 6a051e8151706ff762eedd15, Cluster name: test-acc-tf-c-1012326955663847017
2026-05-14T01:33:22.2051784Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/c5317b2a-037c-4692-ba49-5904e84a30c2/terraform test_name=TestAccStreamAccountDetailsDS_basic
2026-05-14T01:33:22.2053507Z     data_source_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-14T01:33:22.2054028Z         
2026-05-14T01:33:22.2054324Z         Error: Error in delete
2026-05-14T01:33:22.2054600Z         
2026-05-14T01:33:22.2055078Z         cluster=test-acc-tf-c-1012326955663847017 didn't reach desired state:
2026-05-14T01:33:22.2055544Z         DELETED, error: Get
2026-05-14T01:33:22.2056344Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a051e8151706ff762eedd15/clusters/test-acc-tf-c-1012326955663847017":
2026-05-14T01:33:22.2057085Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-05-14T01:33:22.2057519Z --- FAIL: TestAccStreamAccountDetailsDS_basic (1986.35s)
```

- 2026-05-15 PASS 14 minutes
- 2026-05-16

### Error 2026-05-16T00:55:43+00:00
```
2026-05-16T00:55:43.2539266Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-05-16T00:55:43.2540246Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-4207594674818067991
2026-05-16T00:55:43.2542174Z     data_source_test.go:19: 
2026-05-16T00:55:43.2543694Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:55:43.2545989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:55:43.2548133Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:55:43.2550223Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-16T00:55:43.2552311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2026-05-16T00:55:43.2553919Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T00:55:43.2554449Z         	Error:      	Received unexpected error:
2026-05-16T00:55:43.2556425Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:43.2557824Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2026-05-16T00:55:43.2559747Z         	Messages:   	Project creation failed: test-acc-tf-p-4207594674818067991, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:43.2560972Z --- FAIL: TestAccStreamAccountDetailsDS_basic (101.95s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19 PASS 14 minutes
- 2026-05-20
  - PASS 14 minutes
  - PASS 15 minutes
- 2026-05-21 PASS 20 minutes
- 2026-05-22 PASS 21 minutes
- 2026-05-23 PASS 14 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 minutes
- 2026-05-26 PASS 14 minutes
- 2026-05-27 PASS 45 minutes
- 2026-05-28

### Error 2026-05-28T00:58:17+00:00
```
2026-05-28T00:58:17.2892987Z === RUN   TestAccStreamAccountDetailsDS_basic
2026-05-28T00:58:17.2894171Z     data_source_test.go:19: Creating execution project (1): test-acc-tf-p-1861219351868463847
2026-05-28T00:58:17.2897191Z     data_source_test.go:19: 
2026-05-28T00:58:17.2899040Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:58:17.2902476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:58:17.2906269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:58:17.2909015Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T00:58:17.2911670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamaccountdetails/data_source_test.go:19
2026-05-28T00:58:17.2912942Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:58:17.2913472Z         	Error:      	Received unexpected error:
2026-05-28T00:58:17.2915397Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:17.2916496Z         	Test:       	TestAccStreamAccountDetailsDS_basic
2026-05-28T00:58:17.2918824Z         	Messages:   	Project creation failed: test-acc-tf-p-1861219351868463847, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:17.2921182Z --- FAIL: TestAccStreamAccountDetailsDS_basic (81.25s)
```

- 2026-05-29 PASS 14 minutes
- 2026-05-30 PASS 14 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 44 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 30 minutes
- 2026-06-05 PASS 15 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 18 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 15 minutes
- 2026-05-25 PASS 14 minutes
- 2026-05-26 PASS 14 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

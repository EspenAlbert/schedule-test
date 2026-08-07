# autogen_fast/maintenancewindowapi/TestAccMaintenanceWindowAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-07-16 00:53](#error-2026-07-16t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-07-18 00:49](#error-2026-07-18t0049420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.03s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-23 00:48](#error-2026-07-23t0048360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:03+00:00
```
2026-07-09T00:57:03.9758360Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-09T00:57:03.9759331Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7176661747581689591
2026-07-09T00:57:03.9759878Z     resource_test.go:17: 
2026-07-09T00:57:03.9760833Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:03.9762689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:03.9764549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:03.9766549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-09T00:57:03.9767454Z         	Error:      	Received unexpected error:
2026-07-09T00:57:03.9769664Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9770776Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-09T00:57:03.9772588Z         	Messages:   	Project creation failed: test-acc-tf-p-7176661747581689591, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:03.9773838Z --- FAIL: TestAccMaintenanceWindowAPI_basic (66.90s)
```

- 2026-07-10 PASS 13 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1655939Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-11T00:54:31.1656612Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7206666914757258316
2026-07-11T00:54:31.1657341Z     resource_test.go:17: 
2026-07-11T00:54:31.1658508Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1660849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1663103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1665516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-11T00:54:31.1667096Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1669645Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1670991Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-11T00:54:31.1673190Z         	Messages:   	Project creation failed: test-acc-tf-p-7206666914757258316, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1674653Z --- FAIL: TestAccMaintenanceWindowAPI_basic (61.74s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 14 seconds
- 2026-07-14 PASS 56 seconds
- 2026-07-15 PASS 15 seconds
- 2026-07-16

### Error 2026-07-16T00:53:06+00:00
```
2026-07-16T00:53:06.3033421Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-16T00:53:06.3034113Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7182551045086971596
2026-07-16T00:53:06.3034712Z     resource_test.go:17: 
2026-07-16T00:53:06.3035671Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:53:06.3037443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:53:06.3039131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:53:06.3040895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-16T00:53:06.3041973Z         	Error:      	Received unexpected error:
2026-07-16T00:53:06.3043744Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:06.3044756Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-16T00:53:06.3046374Z         	Messages:   	Project creation failed: test-acc-tf-p-7182551045086971596, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:53:06.3047570Z --- FAIL: TestAccMaintenanceWindowAPI_basic (64.73s)
```

- 2026-07-17 PASS 15 seconds
- 2026-07-18

### Error 2026-07-18T00:49:42+00:00
```
2026-07-18T00:49:42.9218411Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-18T00:49:42.9219186Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7660067570536295676
2026-07-18T00:49:42.9219819Z     resource_test.go:17: 
2026-07-18T00:49:42.9220801Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:42.9222611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:42.9224445Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:42.9226703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-18T00:49:42.9227856Z         	Error:      	Received unexpected error:
2026-07-18T00:49:42.9229762Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9230913Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-18T00:49:42.9232693Z         	Messages:   	Project creation failed: test-acc-tf-p-7660067570536295676, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:42.9233986Z --- FAIL: TestAccMaintenanceWindowAPI_basic (86.29s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0097855Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-21T00:53:06.0098531Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3930672429816563516
2026-07-21T00:53:06.0099087Z     resource_test.go:17: 
2026-07-21T00:53:06.0100080Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0101954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0103816Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0106050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-21T00:53:06.0107012Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0109094Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0110197Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-21T00:53:06.0112032Z         	Messages:   	Project creation failed: test-acc-tf-p-3930672429816563516, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0113239Z --- FAIL: TestAccMaintenanceWindowAPI_basic (62.06s)
```

- 2026-07-22 PASS 14 seconds
- 2026-07-23

### Error 2026-07-23T00:48:36+00:00
```
2026-07-23T00:48:36.9236657Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-07-23T00:48:36.9237166Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6699120657948955314
2026-07-23T00:48:36.9237595Z     resource_test.go:17: 
2026-07-23T00:48:36.9238360Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:36.9239795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:36.9241420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:36.9243093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-07-23T00:48:36.9243799Z         	Error:      	Received unexpected error:
2026-07-23T00:48:36.9245404Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9246258Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-07-23T00:48:36.9247799Z         	Messages:   	Project creation failed: test-acc-tf-p-6699120657948955314, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:36.9248793Z --- FAIL: TestAccMaintenanceWindowAPI_basic (67.09s)
```

- 2026-07-24 PASS 12 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 12 seconds
- 2026-07-31 PASS 11 seconds
- 2026-08-01 PASS 11 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 11 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 12 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 16 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 seconds
  - PASS 17 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

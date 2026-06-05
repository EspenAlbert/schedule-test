# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-13 01:04](#error-2026-05-13t0104270000) |  | dev |  | 12.09s
[2026-05-16 00:58](#error-2026-05-16t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-23 01:07](#error-2026-05-23t0107190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.03s
[2026-05-26 02:14](#error-2026-05-26t0214000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-28 01:01](#error-2026-05-28t0101570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-30 01:08](#error-2026-05-30t0108160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.05s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 28 seconds
  - PASS 26 seconds
- 2026-05-08 PASS 27 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 24 seconds
- 2026-05-12 PASS a minute
- 2026-05-13

### Error 2026-05-13T01:04:27+00:00
```
2026-05-13T01:04:27.4917242Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-13T01:04:27.4926221Z === CONT  TestAccProjectIPAccessList_settingCIDRBlock
2026-05-13T01:04:27.5016547Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2026-05-13T01:04:27.5017260Z     resource_project_ip_access_list_test.go:66: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-05-13T01:04:27.5017785Z         
2026-05-13T01:04:27.5018118Z         Error: error getting access list entry
2026-05-13T01:04:27.5018515Z         
2026-05-13T01:04:27.5018911Z           with data.mongodbatlas_project_ip_access_list.test,
2026-05-13T01:04:27.5019629Z           on terraform_plugin_test.tf line 18, in data "mongodbatlas_project_ip_access_list" "test":
2026-05-13T01:04:27.5020291Z           18: 			data "mongodbatlas_project_ip_access_list" "test" {
2026-05-13T01:04:27.5020621Z         
2026-05-13T01:04:27.5021272Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a03cc9dc2214ad0d1992997/accessList/179.154.226.127%2F32
2026-05-13T01:04:27.5021896Z         GET: HTTP 404 Not Found (Error code:
2026-05-13T01:04:27.5022382Z         "ATLAS_NETWORK_PERMISSION_ENTRY_NOT_FOUND") Detail: IP Address
2026-05-13T01:04:27.5022904Z         179.154.226.127/32 not on Atlas access list for group
2026-05-13T01:04:27.5023685Z         6a03cc9dc2214ad0d1992997. Reason: Not Found. Params: [179.154.226.127/32
2026-05-13T01:04:27.5024375Z         6a03cc9dc2214ad0d1992997], BadRequestDetail: 
2026-05-13T01:04:27.5025248Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (12.87s)
```

- 2026-05-14 PASS 30 seconds
- 2026-05-15 PASS 25 seconds
- 2026-05-16

### Error 2026-05-16T00:58:58+00:00
```
2026-05-16T00:58:58.5529372Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-16T00:58:58.5530515Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-6990030914634308210
2026-05-16T00:58:58.5531486Z     resource_project_ip_access_list_test.go:58: 
2026-05-16T00:58:58.5533059Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:58.5536303Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:58.5539299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:58.5542825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-16T00:58:58.5544464Z         	Error:      	Received unexpected error:
2026-05-16T00:58:58.5547928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5549647Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-16T00:58:58.5552594Z         	Messages:   	Project creation failed: test-acc-tf-p-6990030914634308210, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5554662Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (61.60s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 26 seconds
- 2026-05-19 PASS 39 seconds
- 2026-05-20 PASS 27 seconds
- 2026-05-21 PASS 34 seconds
- 2026-05-22 PASS 26 seconds
- 2026-05-23

### Error 2026-05-23T01:07:19+00:00
```
2026-05-23T01:07:19.7054386Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-23T01:07:19.7055099Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-7488623947629636079
2026-05-23T01:07:19.7055724Z     resource_project_ip_access_list_test.go:58: 
2026-05-23T01:07:19.7056945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:07:19.7058744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:07:19.7060544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:07:19.7062658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-23T01:07:19.7063543Z         	Error:      	Received unexpected error:
2026-05-23T01:07:19.7065477Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:07:19.7066771Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-23T01:07:19.7068549Z         	Messages:   	Project creation failed: test-acc-tf-p-7488623947629636079, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:07:19.7069767Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (84.27s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 24 seconds
- 2026-05-26

### Error 2026-05-26T02:14:00+00:00
```
2026-05-26T02:14:00.7590793Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-26T02:14:00.7591477Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-777717924578977804
2026-05-26T02:14:00.7592278Z     resource_project_ip_access_list_test.go:58: 
2026-05-26T02:14:00.7593248Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:00.7595047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:00.7596839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:00.7599213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-26T02:14:00.7600094Z         	Error:      	Received unexpected error:
2026-05-26T02:14:00.7602030Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7603086Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-26T02:14:00.7604849Z         	Messages:   	Project creation failed: test-acc-tf-p-777717924578977804, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7606040Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (63.94s)
```

- 2026-05-27 PASS 25 seconds
- 2026-05-28

### Error 2026-05-28T01:01:57+00:00
```
2026-05-28T01:01:57.5433128Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-28T01:01:57.5433830Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-4609887635783580117
2026-05-28T01:01:57.5434469Z     resource_project_ip_access_list_test.go:58: 
2026-05-28T01:01:57.5435441Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:57.5437541Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:57.5439358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:57.5441465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-28T01:01:57.5442544Z         	Error:      	Received unexpected error:
2026-05-28T01:01:57.5444478Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5445555Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-28T01:01:57.5448304Z         	Messages:   	Project creation failed: test-acc-tf-p-4609887635783580117, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5449603Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (69.11s)
```

- 2026-05-29 PASS 25 seconds
- 2026-05-30

### Error 2026-05-30T01:08:16+00:00
```
2026-05-30T01:08:16.1442888Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-05-30T01:08:16.1443617Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-1983854350726769727
2026-05-30T01:08:16.1444265Z     resource_project_ip_access_list_test.go:58: 
2026-05-30T01:08:16.1445261Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:16.1447275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:16.1449200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:16.1455405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-05-30T01:08:16.1456382Z         	Error:      	Received unexpected error:
2026-05-30T01:08:16.1458376Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1460111Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-05-30T01:08:16.1461989Z         	Messages:   	Project creation failed: test-acc-tf-p-1983854350726769727, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1463252Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (84.53s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 25 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2920521Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-06-02T01:12:19.2921842Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-6044251797124214575
2026-06-02T01:12:19.2922902Z     resource_project_ip_access_list_test.go:58: 
2026-06-02T01:12:19.2924536Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:19.2927588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:19.2930672Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:19.2934686Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-06-02T01:12:19.2936270Z         	Error:      	Received unexpected error:
2026-06-02T01:12:19.2938049Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-02T01:12:19.2939222Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-06-02T01:12:19.2941351Z         	Messages:   	Project creation failed: test-acc-tf-p-6044251797124214575, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.231.133.249:443: i/o timeout
2026-06-02T01:12:19.2942764Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (5.00s)
```

- 2026-06-03 PASS 24 seconds
- 2026-06-04 PASS 28 seconds
- 2026-06-05 PASS 25 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 27 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 28 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 28 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

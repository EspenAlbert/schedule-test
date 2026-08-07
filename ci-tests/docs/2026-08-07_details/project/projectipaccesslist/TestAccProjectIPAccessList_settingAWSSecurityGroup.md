# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.06s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-07-16 00:48](#error-2026-07-16t0048470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.09s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.00s
[2026-07-21 00:50](#error-2026-07-21t0050320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-23 00:48](#error-2026-07-23t0048460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8869595Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-09T01:01:39.8870335Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-4415309760937497577
2026-07-09T01:01:39.8870964Z     resource_project_ip_access_list_test.go:85: 
2026-07-09T01:01:39.8871949Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:39.8874038Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:39.8875904Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:39.8878098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-09T01:01:39.8879029Z         	Error:      	Received unexpected error:
2026-07-09T01:01:39.8881026Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8882161Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-09T01:01:39.8884174Z         	Messages:   	Project creation failed: test-acc-tf-p-4415309760937497577, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8885458Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (65.64s)
```

- 2026-07-10 PASS 4 minutes
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5833201Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-11T00:54:38.5833935Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-419662257169936708
2026-07-11T00:54:38.5834564Z     resource_project_ip_access_list_test.go:85: 
2026-07-11T00:54:38.5835558Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:38.5837675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:38.5839559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:38.5841744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-11T00:54:38.5842666Z         	Error:      	Received unexpected error:
2026-07-11T00:54:38.5844657Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5845799Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-11T00:54:38.5847814Z         	Messages:   	Project creation failed: test-acc-tf-p-419662257169936708, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5849096Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (64.92s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 3 minutes
- 2026-07-14 PASS 3 minutes
- 2026-07-15 PASS 5 minutes
- 2026-07-16

### Error 2026-07-16T00:48:47+00:00
```
2026-07-16T00:48:47.7347330Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-16T00:48:47.7348104Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-189905836869723915
2026-07-16T00:48:47.7348772Z     resource_project_ip_access_list_test.go:85: 
2026-07-16T00:48:47.7349820Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:47.7352189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:47.7354088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:47.7356277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-16T00:48:47.7357216Z         	Error:      	Received unexpected error:
2026-07-16T00:48:47.7359204Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7360364Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-16T00:48:47.7362485Z         	Messages:   	Project creation failed: test-acc-tf-p-189905836869723915, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7363813Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (65.95s)
```

- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.1168840Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-18T00:49:47.1169589Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-6740941529975739732
2026-07-18T00:49:47.1170239Z     resource_project_ip_access_list_test.go:85: 
2026-07-18T00:49:47.1171505Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:47.1173398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:47.1175293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:47.1177703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-18T00:49:47.1178633Z         	Error:      	Received unexpected error:
2026-07-18T00:49:47.1180886Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1182093Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-18T00:49:47.1183986Z         	Messages:   	Project creation failed: test-acc-tf-p-6740941529975739732, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1185307Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (67.00s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:50:32+00:00
```
2026-07-21T00:50:32.6187145Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-21T00:50:32.6188137Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-8115357905664404587
2026-07-21T00:50:32.6189037Z     resource_project_ip_access_list_test.go:85: 
2026-07-21T00:50:32.6190889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:32.6193845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:50:32.6197325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:50:32.6200620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-21T00:50:32.6202368Z         	Error:      	Received unexpected error:
2026-07-21T00:50:32.6205907Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6208218Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-21T00:50:32.6211209Z         	Messages:   	Project creation failed: test-acc-tf-p-8115357905664404587, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6234819Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (62.01s)
```

- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:48:46+00:00
```
2026-07-23T00:48:46.3601352Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-23T00:48:46.3602094Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-6589658569328306758
2026-07-23T00:48:46.3602717Z     resource_project_ip_access_list_test.go:85: 
2026-07-23T00:48:46.3603707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:46.3605490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:46.3607259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:46.3609486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-07-23T00:48:46.3610563Z         	Error:      	Received unexpected error:
2026-07-23T00:48:46.3612510Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3613598Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-07-23T00:48:46.3615369Z         	Messages:   	Project creation failed: test-acc-tf-p-6589658569328306758, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3616555Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (61.40s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 4 minutes
- 2026-08-07 PASS 4 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 minutes
  - PASS 5 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

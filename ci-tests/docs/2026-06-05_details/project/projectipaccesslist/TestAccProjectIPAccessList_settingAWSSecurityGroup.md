# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:58](#error-2026-05-16t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.10s
[2026-05-26 02:14](#error-2026-05-26t0214000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-05-28 01:01](#error-2026-05-28t0101570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.10s
[2026-05-30 01:08](#error-2026-05-30t0108160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.08s
[2026-06-02 01:12](#error-2026-06-02t0112190000) |  | dev | flaky_client | 5.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09 PASS 5 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T00:58:58+00:00
```
2026-05-16T00:58:58.5555400Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-16T00:58:58.5556536Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-195949650112221944
2026-05-16T00:58:58.5557529Z     resource_project_ip_access_list_test.go:85: 
2026-05-16T00:58:58.5559088Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:58.5562049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:58.5565333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:58.5568883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-05-16T00:58:58.5570331Z         	Error:      	Received unexpected error:
2026-05-16T00:58:58.5573526Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5575479Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-16T00:58:58.5578457Z         	Messages:   	Project creation failed: test-acc-tf-p-195949650112221944, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5580475Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (65.99s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 10 minutes
- 2026-05-19 PASS 3 minutes
- 2026-05-20 PASS 3 minutes
- 2026-05-21 PASS 3 minutes
- 2026-05-22 PASS 3 minutes
- 2026-05-23 PASS 4 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 5 minutes
- 2026-05-26

### Error 2026-05-26T02:14:00+00:00
```
2026-05-26T02:14:00.7606485Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-26T02:14:00.7607177Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-2965183855597049976
2026-05-26T02:14:00.7607770Z     resource_project_ip_access_list_test.go:85: 
2026-05-26T02:14:00.7609011Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:14:00.7610826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:14:00.7612737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:14:00.7614892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-05-26T02:14:00.7615927Z         	Error:      	Received unexpected error:
2026-05-26T02:14:00.7618062Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7619558Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-26T02:14:00.7621369Z         	Messages:   	Project creation failed: test-acc-tf-p-2965183855597049976, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:00.7622611Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (70.58s)
```

- 2026-05-27 PASS 3 minutes
- 2026-05-28

### Error 2026-05-28T01:01:57+00:00
```
2026-05-28T01:01:57.5450065Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-28T01:01:57.5450794Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-9014694143348291826
2026-05-28T01:01:57.5451428Z     resource_project_ip_access_list_test.go:85: 
2026-05-28T01:01:57.5452594Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:57.5454402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:57.5456331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:57.5458651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-05-28T01:01:57.5459556Z         	Error:      	Received unexpected error:
2026-05-28T01:01:57.5461496Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5462764Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-28T01:01:57.5465161Z         	Messages:   	Project creation failed: test-acc-tf-p-9014694143348291826, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5466420Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (74.99s)
```

- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:08:16+00:00
```
2026-05-30T01:08:16.1463738Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-30T01:08:16.1464500Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-2857622696335658855
2026-05-30T01:08:16.1465160Z     resource_project_ip_access_list_test.go:85: 
2026-05-30T01:08:16.1466166Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:16.1468150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:16.1470331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:16.1472524Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-05-30T01:08:16.1473454Z         	Error:      	Received unexpected error:
2026-05-30T01:08:16.1475434Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1476586Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-05-30T01:08:16.1478437Z         	Messages:   	Project creation failed: test-acc-tf-p-2857622696335658855, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1479708Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (107.85s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2943531Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-06-02T01:12:19.2944755Z     resource_project_ip_access_list_test.go:85: Creating execution project (1): test-acc-tf-p-4710159008750867205
2026-06-02T01:12:19.2945773Z     resource_project_ip_access_list_test.go:85: 
2026-06-02T01:12:19.2947314Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:12:19.2950326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:12:19.2953515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:12:19.2957125Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:85
2026-06-02T01:12:19.2958645Z         	Error:      	Received unexpected error:
2026-06-02T01:12:19.2960371Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-02T01:12:19.2961745Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2026-06-02T01:12:19.2963755Z         	Messages:   	Project creation failed: test-acc-tf-p-4710159008750867205, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": dial tcp 3.228.247.77:443: i/o timeout
2026-06-02T01:12:19.2965157Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (5.00s)
```

- 2026-06-03 PASS 8 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

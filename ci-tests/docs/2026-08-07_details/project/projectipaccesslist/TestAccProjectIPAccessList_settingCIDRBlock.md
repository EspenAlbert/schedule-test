# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-16 00:48](#error-2026-07-16t0048470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.06s
[2026-07-21 00:50](#error-2026-07-21t0050320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.09s
[2026-07-23 00:48](#error-2026-07-23t0048460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.00s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8853522Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-09T01:01:39.8854236Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-9086996574311007877
2026-07-09T01:01:39.8854864Z     resource_project_ip_access_list_test.go:58: 
2026-07-09T01:01:39.8855855Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:39.8857722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:39.8859698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:39.8861897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-09T01:01:39.8862824Z         	Error:      	Received unexpected error:
2026-07-09T01:01:39.8864946Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8866052Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-09T01:01:39.8867891Z         	Messages:   	Project creation failed: test-acc-tf-p-9086996574311007877, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8869129Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (65.25s)
```

- 2026-07-10 PASS 27 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5816145Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-11T00:54:38.5816854Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-3142989158457685068
2026-07-11T00:54:38.5817483Z     resource_project_ip_access_list_test.go:58: 
2026-07-11T00:54:38.5818831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:38.5820705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:38.5822558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:38.5824738Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-11T00:54:38.5825661Z         	Error:      	Received unexpected error:
2026-07-11T00:54:38.5827985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5829439Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-11T00:54:38.5831462Z         	Messages:   	Project creation failed: test-acc-tf-p-3142989158457685068, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5832731Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (62.26s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 28 seconds
- 2026-07-14 PASS 34 seconds
- 2026-07-15 PASS 27 seconds
- 2026-07-16

### Error 2026-07-16T00:48:47+00:00
```
2026-07-16T00:48:47.7328760Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-16T00:48:47.7329637Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-2838084016759183899
2026-07-16T00:48:47.7330407Z     resource_project_ip_access_list_test.go:58: 
2026-07-16T00:48:47.7331760Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:47.7333876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:47.7335981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:47.7338626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-16T00:48:47.7339705Z         	Error:      	Received unexpected error:
2026-07-16T00:48:47.7342116Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7343525Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-16T00:48:47.7345484Z         	Messages:   	Project creation failed: test-acc-tf-p-2838084016759183899, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7346831Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (69.83s)
```

- 2026-07-17 PASS 27 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.1152292Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-18T00:49:47.1153035Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-6933864528843141450
2026-07-18T00:49:47.1153834Z     resource_project_ip_access_list_test.go:58: 
2026-07-18T00:49:47.1154862Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:47.1156768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:47.1158675Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:47.1161120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-18T00:49:47.1162063Z         	Error:      	Received unexpected error:
2026-07-18T00:49:47.1164101Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1165233Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-18T00:49:47.1167105Z         	Messages:   	Project creation failed: test-acc-tf-p-6933864528843141450, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1168362Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (94.57s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:50:32+00:00
```
2026-07-21T00:50:32.6161676Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-21T00:50:32.6162426Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-6559774813543437410
2026-07-21T00:50:32.6163078Z     resource_project_ip_access_list_test.go:58: 
2026-07-21T00:50:32.6164087Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:32.6167209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:50:32.6170447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:50:32.6174100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-21T00:50:32.6176069Z         	Error:      	Received unexpected error:
2026-07-21T00:50:32.6179215Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6181238Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-21T00:50:32.6183809Z         	Messages:   	Project creation failed: test-acc-tf-p-6559774813543437410, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6186316Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (85.95s)
```

- 2026-07-22 PASS 28 seconds
- 2026-07-23

### Error 2026-07-23T00:48:46+00:00
```
2026-07-23T00:48:46.3585291Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-07-23T00:48:46.3586023Z     resource_project_ip_access_list_test.go:58: Creating execution project (1): test-acc-tf-p-1637975567297381034
2026-07-23T00:48:46.3586660Z     resource_project_ip_access_list_test.go:58: 
2026-07-23T00:48:46.3587631Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:46.3589413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:46.3591389Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:46.3593510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:58
2026-07-23T00:48:46.3594415Z         	Error:      	Received unexpected error:
2026-07-23T00:48:46.3596373Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3597720Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2026-07-23T00:48:46.3599491Z         	Messages:   	Project creation failed: test-acc-tf-p-1637975567297381034, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3600873Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (85.04s)
```

- 2026-07-24 PASS 27 seconds
- 2026-07-25 PASS 25 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 30 seconds
- 2026-07-28 PASS 25 seconds
- 2026-07-29 PASS 24 seconds
- 2026-07-30 PASS 25 seconds
- 2026-07-31
  - PASS 24 seconds
  - PASS 26 seconds
  - PASS 23 seconds
- 2026-08-01 PASS 24 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 24 seconds
  - PASS 23 seconds
- 2026-08-04 PASS 26 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 24 seconds
- 2026-08-07 PASS 24 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 24 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 25 seconds
  - PASS 26 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 25 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 26 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 25 seconds
  - PASS 23 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 24 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

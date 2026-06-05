# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 01:13](#error-2026-05-16t0113160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.06s
[2026-05-19 01:17](#error-2026-05-19t0117480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.07s
[2026-05-21 01:29](#error-2026-05-21t0129230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s
[2026-05-30 01:18](#error-2026-05-30t0118080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 16 minutes
  - PASS 51 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09 PASS 22 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 16 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 25 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16

### Error 2026-05-16T01:13:16+00:00
```
2026-05-16T01:13:16.1212950Z === RUN   TestAccLDAPVerify_basic
2026-05-16T01:13:16.1213608Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-6990909918062128733
2026-05-16T01:13:16.1214230Z     resource_ldap_verify_test.go:22: 
2026-05-16T01:13:16.1215234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:13:16.1217124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:13:16.1219022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:13:16.1220936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-16T01:13:16.1223209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-05-16T01:13:16.1225282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-05-16T01:13:16.1226163Z         	Error:      	Received unexpected error:
2026-05-16T01:13:16.1228320Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:13:16.1229398Z         	Test:       	TestAccLDAPVerify_basic
2026-05-16T01:13:16.1231209Z         	Messages:   	Project creation failed: test-acc-tf-p-6990909918062128733, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:13:16.1233653Z --- FAIL: TestAccLDAPVerify_basic (86.55s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19

### Error 2026-05-19T01:17:48+00:00
```
2026-05-19T01:17:48.0997394Z === RUN   TestAccLDAPVerify_basic
2026-05-19T01:17:48.0998667Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-9142146855058870844
2026-05-19T01:17:48.0999832Z     resource_ldap_verify_test.go:22: 
2026-05-19T01:17:48.1001853Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:17:48.1005765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:17:48.1009416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:17:48.1013277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:17:48.1017166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-05-19T01:17:48.1021138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-05-19T01:17:48.1023065Z         	Error:      	Received unexpected error:
2026-05-19T01:17:48.1026854Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:17:48.1028884Z         	Test:       	TestAccLDAPVerify_basic
2026-05-19T01:17:48.1032502Z         	Messages:   	Project creation failed: test-acc-tf-p-9142146855058870844, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:17:48.1034792Z --- FAIL: TestAccLDAPVerify_basic (68.71s)
```

- 2026-05-20 PASS 3 minutes
- 2026-05-21

### Error 2026-05-21T01:29:23+00:00
```
2026-05-21T01:29:23.6715994Z === RUN   TestAccLDAPVerify_basic
2026-05-21T01:29:23.6716995Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-5697900766058670622
2026-05-21T01:29:23.6718130Z     resource_ldap_verify_test.go:22: 
2026-05-21T01:29:23.6719497Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:29:23.6722605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:29:23.6725063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:29:23.6727421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T01:29:23.6729886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-05-21T01:29:23.6731997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-05-21T01:29:23.6732913Z         	Error:      	Received unexpected error:
2026-05-21T01:29:23.6734944Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:29:23.6736061Z         	Test:       	TestAccLDAPVerify_basic
2026-05-21T01:29:23.6738168Z         	Messages:   	Project creation failed: test-acc-tf-p-5697900766058670622, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:29:23.6739481Z --- FAIL: TestAccLDAPVerify_basic (61.55s)
```

- 2026-05-22 PASS 3 minutes
- 2026-05-23 PASS 15 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26 PASS 16 minutes
- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 18 minutes
- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:18:08+00:00
```
2026-05-30T01:18:08.8878450Z === RUN   TestAccLDAPVerify_basic
2026-05-30T01:18:08.8879845Z     resource_ldap_verify_test.go:22: Creating execution project (1): test-acc-tf-p-5382122163248400015
2026-05-30T01:18:08.8880983Z     resource_ldap_verify_test.go:22: 
2026-05-30T01:18:08.8883152Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:18:08.8886855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:18:08.8890624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:18:08.8894512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:18:08.8898364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2026-05-30T01:18:08.8902486Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2026-05-30T01:18:08.8904183Z         	Error:      	Received unexpected error:
2026-05-30T01:18:08.8907983Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:18:08.8909968Z         	Test:       	TestAccLDAPVerify_basic
2026-05-30T01:18:08.8913549Z         	Messages:   	Project creation failed: test-acc-tf-p-5382122163248400015, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:18:08.8915830Z --- FAIL: TestAccLDAPVerify_basic (63.49s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 24 minutes
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
- 2026-05-24 PASS 3 minutes
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

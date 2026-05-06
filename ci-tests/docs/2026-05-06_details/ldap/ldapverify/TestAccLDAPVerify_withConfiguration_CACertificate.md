# ldap/ldapverify/TestAccLDAPVerify_withConfiguration_CACertificate Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:52](#error-2026-04-16t0052470000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032a31ec945fedc727b22/clusters | dev | out_of_capacity | 60.01s
[2026-04-30 00:57](#error-2026-04-30t0057400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 3 minutes
- 2026-04-08 PASS 3 minutes
- 2026-04-09 PASS 3 minutes
- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14 PASS 3 minutes
- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:52:47+00:00
```
2026-04-16T00:52:47.7148386Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-04-16T00:52:47.7149147Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-6038821851087908658
2026-04-16T00:52:47.7150012Z     resource_ldap_verify_test.go:32: Creating execution cluster: test-acc-tf-c-3525437929435266961
2026-04-16T00:52:47.7150875Z     resource_ldap_verify_test.go:32: 
2026-04-16T00:52:47.7151893Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:52:47.7153771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:52:47.7155782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-04-16T00:52:47.7156676Z         	Error:      	Received unexpected error:
2026-04-16T00:52:47.7159541Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032a31ec945fedc727b22/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:47.7160988Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-04-16T00:52:47.7163248Z         	Messages:   	Cluster creation failed: test-acc-tf-c-3525437929435266961, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032a31ec945fedc727b22/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:47.7164813Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (60.09s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 3 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 3 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 3 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 3 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T00:57:40+00:00
```
2026-04-30T00:57:40.4700218Z === RUN   TestAccLDAPVerify_withConfiguration_CACertificate
2026-04-30T00:57:40.4701739Z     resource_ldap_verify_test.go:32: Creating execution project (1): test-acc-tf-p-5934558589971249686
2026-04-30T00:57:40.4703103Z     resource_ldap_verify_test.go:32: 
2026-04-30T00:57:40.4705391Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:40.4709410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:40.4729098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:40.4732762Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-04-30T00:57:40.4736689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:32
2026-04-30T00:57:40.4738985Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:57:40.4739970Z         	Error:      	Received unexpected error:
2026-04-30T00:57:40.4743815Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4745703Z         	Test:       	TestAccLDAPVerify_withConfiguration_CACertificate
2026-04-30T00:57:40.4748298Z         	Messages:   	Project creation failed: test-acc-tf-p-5934558589971249686, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:40.4749965Z --- FAIL: TestAccLDAPVerify_withConfiguration_CACertificate (84.36s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05 PASS 3 minutes
- 2026-05-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 3 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04 PASS 3 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 minutes

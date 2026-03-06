# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 26 seconds
- 2026-02-06 PASS 25 seconds
- 2026-02-07 PASS 27 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 seconds
- 2026-02-10 PASS 26 seconds
- 2026-02-11 PASS 26 seconds
- 2026-02-12 PASS 27 seconds
- 2026-02-13 PASS 28 seconds
- 2026-02-14 PASS 26 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 27 seconds
- 2026-02-17 PASS 27 seconds
- 2026-02-18 PASS 25 seconds
- 2026-02-19 PASS 30 seconds
- 2026-02-20 PASS 26 seconds
- 2026-02-21 PASS 26 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 27 seconds
- 2026-02-24 PASS 26 seconds
- 2026-02-25 PASS 26 seconds
- 2026-02-26 PASS 27 seconds
- 2026-02-27 PASS 26 seconds
- 2026-02-28 PASS 26 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 28 seconds
- 2026-03-03 PASS 58 seconds
- 2026-03-04 PASS 28 seconds
- 2026-03-05 PASS 27 seconds
- 2026-03-06 PASS 28 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-03-03 09:37](#error-2026-03-03t0937480000) |  | qa | 24.08s

### Timeline
- 2026-02-04 PASS 26 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 27 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 24 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 23 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 25 seconds
- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:37:48+00:00
```
2026-03-03T09:37:48.2286641Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2026-03-03T09:37:48.2292159Z === CONT  TestAccProjectIPAccessList_settingCIDRBlock
2026-03-03T09:37:48.2360437Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2026-03-03T09:37:48.2361171Z     resource_project_ip_access_list_test.go:66: Step 2/2 error: After applying this test step, the refresh plan was not empty.
2026-03-03T09:37:48.2361724Z         stdout
2026-03-03T09:37:48.2361930Z         
2026-03-03T09:37:48.2362453Z         Note: Objects have changed outside of Terraform
2026-03-03T09:37:48.2362762Z         
2026-03-03T09:37:48.2363668Z         Terraform detected the following changes made outside of Terraform since the
2026-03-03T09:37:48.2364759Z         last "terraform apply" which may have affected this plan:
2026-03-03T09:37:48.2365344Z         
2026-03-03T09:37:48.2366083Z           # mongodbatlas_project_ip_access_list.test has been deleted
2026-03-03T09:37:48.2366658Z           - resource "mongodbatlas_project_ip_access_list" "test" {
2026-03-03T09:37:48.2367217Z               - cidr_block         = "179.154.228.14/32" -> null
2026-03-03T09:37:48.2368123Z                 id                 = "ZW50cnk=:MTc5LjE1NC4yMjguMTQvMzI=-cHJvamVjdF9pZA==:NjlhNmFhNzE2MWY4MDBlOTM1OGE1MzFk"
2026-03-03T09:37:48.2368871Z               - project_id         = "69a6aa7161f800e9358a531d" -> null
2026-03-03T09:37:48.2369365Z                 # (3 unchanged attributes hidden)
2026-03-03T09:37:48.2369677Z             }
2026-03-03T09:37:48.2369874Z         
2026-03-03T09:37:48.2370548Z         Unless you have made equivalent changes to your configuration, or ignored the
2026-03-03T09:37:48.2371207Z         relevant attributes using ignore_changes, the following plan may include
2026-03-03T09:37:48.2371737Z         actions to undo or respond to these changes.
2026-03-03T09:37:48.2372030Z         
2026-03-03T09:37:48.2372553Z         âââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
2026-03-03T09:37:48.2373176Z         
2026-03-03T09:37:48.2373629Z         Terraform used the selected providers to generate the following execution
2026-03-03T09:37:48.2374245Z         plan. Resource actions are indicated with the following symbols:
2026-03-03T09:37:48.2374638Z           + create
2026-03-03T09:37:48.2374917Z          <= read (data resources)
2026-03-03T09:37:48.2375170Z         
2026-03-03T09:37:48.2375494Z         Terraform will perform the following actions:
2026-03-03T09:37:48.2375809Z         
2026-03-03T09:37:48.2376289Z           # data.mongodbatlas_project_ip_access_list.test will be read during apply
2026-03-03T09:37:48.2376897Z           # (depends on a resource or a module with changes pending)
2026-03-03T09:37:48.2377421Z          <= data "mongodbatlas_project_ip_access_list" "test" {
2026-03-03T09:37:48.2377937Z               + aws_security_group = (known after apply)
2026-03-03T09:37:48.2378409Z               + cidr_block         = "179.154.228.14/32"
2026-03-03T09:37:48.2378864Z               + comment            = (known after apply)
2026-03-03T09:37:48.2379313Z               + id                 = (known after apply)
2026-03-03T09:37:48.2379770Z               + ip_address         = (known after apply)
2026-03-03T09:37:48.2380265Z               + project_id         = "69a6aa7161f800e9358a531d"
2026-03-03T09:37:48.2380582Z             }
2026-03-03T09:37:48.2380787Z         
2026-03-03T09:37:48.2381269Z           # data.mongodbatlas_project_ip_access_lists.test will be read during apply
2026-03-03T09:37:48.2382016Z           # (depends on a resource or a module with changes pending)
2026-03-03T09:37:48.2382526Z          <= data "mongodbatlas_project_ip_access_lists" "test" {
2026-03-03T09:37:48.2383158Z               + project_id = "69a6aa7161f800e9358a531d"
2026-03-03T09:37:48.2383606Z               + results    = (known after apply)
2026-03-03T09:37:48.2383900Z             }
2026-03-03T09:37:48.2384103Z         
2026-03-03T09:37:48.2384503Z           # mongodbatlas_project_ip_access_list.test will be created
2026-03-03T09:37:48.2385050Z           + resource "mongodbatlas_project_ip_access_list" "test" {
2026-03-03T09:37:48.2385571Z               + aws_security_group = (known after apply)
2026-03-03T09:37:48.2386029Z               + cidr_block         = "179.154.228.14/32"
2026-03-03T09:37:48.2386636Z               + comment            = "TestAcc for cidrBlock updated (179.154.228.14/32)"
2026-03-03T09:37:48.2387179Z               + id                 = (known after apply)
2026-03-03T09:37:48.2387640Z               + ip_address         = (known after apply)
2026-03-03T09:37:48.2388136Z               + project_id         = "69a6aa7161f800e9358a531d"
2026-03-03T09:37:48.2388455Z             }
2026-03-03T09:37:48.2388653Z         
2026-03-03T09:37:48.2388961Z         Plan: 1 to add, 0 to change, 0 to destroy.
2026-03-03T09:37:48.2389926Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (24.83s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
